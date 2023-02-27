from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'app1/1st.html')


def graph(request):
    return render(request, 'app1/2nd.html')