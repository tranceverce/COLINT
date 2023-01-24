from django.shortcuts import render

# Create your views here.
from django.db.models import F
from .models import face




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
        'good': good,
        'best': best,
        }
    return render(request, 'Faces/graphs.html',context)

def login(request):
    return render(request, 'Faces/login.html')