from django.shortcuts import render

# Create your views here.
from urllib.request import urlopen

def home(request):
    return render(request, 'quotes_app/index.html')
