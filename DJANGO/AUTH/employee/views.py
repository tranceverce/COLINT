from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.contrib.auth.decorators import login_required


# @login_required #Requires login to view home page 
def home(request):
    return render(request, 'employee/index.html')

def loginuser(request):
    if request.method=='GET':
        return render(request, 'employee/loginuser.html',{'form':AuthenticationForm()})
    else:
        uname = request.POST['username']
        upwd = request.POST['password']
        user = authenticate(request, username=uname, password=upwd)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'employee/loginuser.html',{'form':AuthenticationForm(),'message':'User Not Found. Try Again'})

def signupuser(request):
    if request.method=='GET':
        return render(request, 'employee/signup.html',{'form':UserCreationForm()})
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
                return render(request, 'employee/signup.html',{'form':UserCreationForm(),'message':'Username already exists. Choose another one.'})
            else:
                return redirect('home')
        else:
            return render(request, 'employee/signup.html',{'form':UserCreationForm(),'message':'Password Mismatch Error'})


def logoutuser(request):
    logout(request)
    return redirect('home')