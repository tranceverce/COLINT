from django import forms
from .models import Item,Category

class ItemForm(forms.ModelForm):
    category = forms.ModelMultipleChoiceField(
        queryset=Category.objects.all(),
        widget=forms.CheckboxSelectMultiple()
    )

    class Meta:
        model = Item
        fields = ['name','category_main', 'category', 'item_img','desc', "featured",'item_qty']

        widgets = {
            'name': forms.TextInput(attrs={'class': "form-control"}),
            # 'item_img': forms.TextInput(attrs={'class': "form-control", "type":"file" , "id":"formFile"}),
            'item_qty': forms.TextInput(attrs={'class': "form-control" , 'type':"Number"}),
            'category': forms.TextInput(attrs={'class': "form-check-input", 'type':"checkbox"}),
            'featured': forms.TextInput(attrs={'class': "form-check-input", 'type':"checkbox"}),
            'desc': forms.TextInput(attrs={'class': "form-control", "label":"Enter"}),
        }



class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['name']
        
        widgets = {
            'name': forms.TextInput(attrs={'class': "form-control"}),
        }
