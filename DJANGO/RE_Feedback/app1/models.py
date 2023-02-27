from django.db import models

# Create your models here.
class feed(models.Model):
    author_id = models.AutoField(primary_key=True)
    bad = models.PositiveIntegerField()
    good = models.PositiveIntegerField()
    best = models.PositiveIntegerField()

    def __str__(self) -> str:
        return self.author_id