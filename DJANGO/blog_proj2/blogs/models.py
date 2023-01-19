from django.db import models

# Create your models here.

class blog(models.Model):
    title=models.CharField(max_length=50)
    author=models.CharField(max_length=50)
    date_time=models.DateTimeField(auto_now=True)
    content=models.TextField()
    image = models.ImageField(upload_to='images/')
    #likes=models.IntegerField(default=0)

    def __str__(self):
        return self.title