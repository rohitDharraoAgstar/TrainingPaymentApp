from operator import mod
from statistics import mode
from django.db import models

# Create your models here.
class Payment(models.Model):
    name=models.CharField(max_length=50)
    amount=models.IntegerField(default=0)

    def __str__(self):
        return self.name