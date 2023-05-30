from django.db import models
from taggit.managers import TaggableManager
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class NameField(models.CharField):

    def camel_case(self,str_val):
        return str_val.replace(str_val[0],str_val[0].upper(),1)

    def get_prep_value(self, value):
        lwr =  str(value).lower()
        lwr = self.camel_case(lwr)
        # return re.sub('[^\w\d]', '', lwr)
        return lwr.strip()

class Item(models.Model):
    name = NameField(max_length=50, unique=True)
    category_choices = models.TextChoices("Inventory","Consumable Non-Consumable")
    category_main = models.TextField(choices=category_choices.choices,max_length=20)
    category = models.ManyToManyField(Category)
    item_img = models.ImageField(upload_to='images/')
    desc = models.TextField(max_length=200,default=" ")
    featured = models.BooleanField(default=False)
    item_qty = models.IntegerField()
    tags = TaggableManager()
    def __str__(self) -> str:
        return self.name