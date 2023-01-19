from django.shortcuts import render

from django.http import HttpResponse
from .models import bloodgroup
from django.core.paginator import Paginator

# Create your views here.

def home(request):
    # return HttpResponse('<h1>A</h1>')
    return render(request,'portal_app/index.html',)

def search(request):
    mylist=bloodgroup.objects.all()
    paginator = Paginator(mylist, 5) # Show 25 contacts per page.
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'portal_app/results.html', {'page_obj': page_obj})
    #return render(request,'portal_app/results.html',{'list':mylist})