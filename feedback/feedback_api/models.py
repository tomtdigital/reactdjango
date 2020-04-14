from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    about_me = models.CharField(max_length=100, blank=True, null=True)
    owner = models.ForeignKey(User, related_name='profile', on_delete=models.CASCADE, null=True)        

class Category(models.Model):
    category_name = models.CharField(max_length=20, unique=True)
    owner = models.ForeignKey(User, related_name='categories', on_delete=models.CASCADE, null=True)        
    
    def __str__(self):
        return "%s" % self.category_name

class Task(models.Model):
    category = models.ForeignKey(Category, related_name='tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    owner = models.ForeignKey(User, related_name='tasks', on_delete=models.CASCADE, null=True)        

    class Meta:
        unique_together = [['title','description']]
        