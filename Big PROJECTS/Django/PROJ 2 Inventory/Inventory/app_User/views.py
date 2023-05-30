from django.shortcuts import render,redirect,get_list_or_404
from django.core.paginator import Paginator

from app_Admin.models import Item

# Create your views here.
def home(request):
    products= Item.objects.all()
    paginator = Paginator(products, 25) # Show 25 items per page.
    page_number = request.GET.get('page')
    products = paginator.get_page(page_number)
	#return render(request, 'mriic/index.html', {'page_obj': page_obj})

    return render(request, "app_User/index.html",{"products":products})


# Search the inventory
def search(request):
    if request.method == "POST":
        query_name = request.POST.get('name', None)
        if query_name:
            results = Item.objects.filter(name__contains=query_name)
            return render(request, 'app_User/search.html', {"results":results, "name":query_name})
        

def cate(request,cat_id):
    my_blogs=Item.objects.filter(category=cat_id)
    return render(request, 'blogs/category.html',{'products':my_blogs})