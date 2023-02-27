from django.shortcuts import render,redirect
from .forms import newForm
# Create your views here.
from .models import face




def home(request):
    return render(request, 'Faces/index.html')

def stat(request):
    return render(request, 'Faces/graphs.html')
