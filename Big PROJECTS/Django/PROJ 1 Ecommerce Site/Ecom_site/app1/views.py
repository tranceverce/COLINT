from django.shortcuts import render
from .models import Product

# Create your views here.

def home(request):
    my_product=Product.objects.all()
    context={
        "myproduct":my_product
    }

    return render(request, "app1/index.html",context)



def cart(request):
    my_product=Product.objects.all()
    context={
        "myproduct":my_product
    }

    return render(request, "app1/cart.html" ,context)