from django.shortcuts import render

# Create your views here.
from django.contrib import messages



def home(request):
    messages.info(request, 'Your password has been changed successfully!')
    return render(request, 'Faces/index.html')

def stat(request):
    return render(request, 'Faces/graphs.html')