from django.shortcuts import render,get_object_or_404
from .models import blog

from django.core.paginator import Paginator


# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.contrib.auth.decorators import login_required



def home(request):
    #my_blogs=get_object_or_404(blog, pk=1)
    my_blogs=blog.objects.all()
    #print(my_blogs)
    #print(type(my_blogs))
    paginator = Paginator(my_blogs, 3) # Show 25 contacts per page.
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render (request, 'blogs/index.html',{'page_obj':page_obj})

def article(request,blog_id):
    my_blogs=get_object_or_404(blog, pk=blog_id)
    return render(request, 'blogs/article.html',{'blogs':my_blogs})


def loginuser(request):
    if request.method=='GET':
        return render(request, 'blogs/loginuser.html',{'form':AuthenticationForm()})
    else:
        uname = request.POST['username']
        upwd = request.POST['password']
        user = authenticate(request, username=uname, password=upwd)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'blogs/loginuser.html',{'form':AuthenticationForm(),'message':'User Not Found. Try Again'})

def signupuser(request):
    if request.method=='GET':
        return render(request, 'blogs/signup.html',{'form':UserCreationForm()})
    else:
        uname = request.POST['username']
        upwd1 = request.POST['password1']
        upwd2 = request.POST['password2']
        if upwd1==upwd2:
            try:
                user = User.objects.create_user(username=uname,password=upwd2)
                user.save()
                login(request,user)
            except IntegrityError:
                return render(request, 'blogs/signup.html',{'form':UserCreationForm(),'message':'Username already exists. Choose another one.'})
            else:
                return redirect('home')
        else:
            return render(request, 'blogs/signup.html',{'form':UserCreationForm(),'message':'Password Mismatch Error'})
