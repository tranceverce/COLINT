from django.db import models

# Create your models here.

class Feedback(models.Model):
    bad = models.IntegerField(default=0)
    good = models.IntegerField(default=0)
    best = models.IntegerField(default=0)

    def __str__(self):
        max_value = max(self.bad, self.good, self.best)
        if max_value == self.bad:
            return "Bad"
        elif max_value == self.good:
            return  "Good"
        else:
            return  "Best"