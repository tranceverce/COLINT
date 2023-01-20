from django.db import models

# Create your models here.

class face(models.Model):
    good = models.IntegerField(default=0)
    bad = models.IntegerField(default=0)
    best = models.IntegerField(default=0)
