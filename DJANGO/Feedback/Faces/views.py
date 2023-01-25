from django.shortcuts import render,redirect

# Create your views here.
from django.db.models import F
from .models import face
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import authenticate, login, logout




def home(request):
    if request.POST.get('b1'):
        reporter = face.objects.get(name='b1')
        reporter.stories_filed = F('bad') + 1
        reporter.save()
    if request.POST.get('b2'):
        pass
    if request.POST.get('b3'):
        pass
    return render(request, 'Faces/index.html')

def stat(request):
    bad=face.bad
    good=face.good
    best=face.best
    context= {
        'bad': bad,
        'good': 5,
        'best': best,
        }
    return render(request, 'Faces/graphs.html',context)

def login(request):
    if request.method=='GET':
        return render(request, 'Faces/login.html',{'form':AuthenticationForm()})
    else:
        uname = request.POST['username']
        upwd = request.POST['password']
        user = authenticate(request, username=uname, password=upwd)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'Faces/login.html',{'form':AuthenticationForm(),'message':'User Not Found. Try Again'})