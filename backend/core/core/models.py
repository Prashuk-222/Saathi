from django.db import models

class FormData(models.Model):
    text = models.CharField(max_length=100)
    