from django.db import models

# Create your models here.

# blood_group_choices=[
#     ("A+", "A+"),
#     ("A-", "A-"),
#     ("B+", "B+"),
#     ("B-", "B-"),
#     ("O+", "O+"),
#     ("O-", "O-"),
# ]

class bloodgroup(models.Model):
    name = models.CharField(max_length=40)
    age = models.IntegerField()
    email = models.EmailField(unique=True)
    contact = models.CharField(max_length=10)
    department = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    blood_group_types = models.TextChoices("Blood Group","A+ A- B+ B- O+ O- AB+ AB-")
    blood_group = models.CharField(choices=blood_group_types.choices, max_length=10)

    def __str__(self):
        return self.name
