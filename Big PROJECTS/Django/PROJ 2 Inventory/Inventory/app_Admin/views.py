from django.shortcuts import render
from django.contrib import messages
from .forms import ItemForm,CategoryForm
from .models import Item

# Create your views here.

def home(request):
    products= Item.objects.all()
    return render(request, "app_Admin/index.html",{"products":products})


# Adding a new product to the database
def add_Product(request):
    if request.method == 'POST':
        form = ItemForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.info(request, "Uploaded successfully")
    else:
        form = ItemForm()
    return render(request, 'app_Admin/add_product.html', {'form': form})


#Adding a new Category to the datebase
def add_Category(request):
    if request.method == 'POST':
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            messages.info(request, "Uploaded successfully")
    else:
        form = CategoryForm()
    return render(request, 'app_Admin/add_category.html', {'form': form})


# To change the quantity in the model
def change(request):
    products= Item.objects.all()
	#return render(request, 'mriic/index.html', {'page_obj': page_obj})
    return render(request, 'app_Admin/change_product_qty.html',{"my_items":products})
