from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    category_name = models.CharField(max_length=20, unique=True)
    
    def __str__(self):
        return "%s" % self.category_name

class Task(models.Model):
    category = models.ForeignKey(Category, related_name='tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    owner = models.ForeignKey(User, related_name='tasks', on_delete=models.CASCADE, null=True)        

    class Meta:
        unique_together = [['title','description']]
        