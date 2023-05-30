from django.shortcuts import render
from django.db.models import Count
from .models import Feedback
# Create your views here.

def home(request):
    if 'happy' in request.POST:
        data = Feedback(good=1)
        data.save()
    if 'sad' in request.POST:
        data = Feedback(bad=1)
        data.save()
    if 'best' in request.POST:
        data = Feedback(best=1)
        data.save()

    return render(request, 'app1/feedback.html')


def stats(request):
    feedback_counts = {
        "num_bad" :Feedback.objects.filter(bad=1).count(),
        "num_good" :Feedback.objects.filter(good=1).count(),
        "num_best":Feedback.objects.filter(best=1).count()
    }
    return render(request, 'app1/stats.html', {'feedback_counts': feedback_counts})


def login(request):
    return render(request, 'app1/login.html')


def signup(request):
    
    return render(request, 'app1/signup.html')