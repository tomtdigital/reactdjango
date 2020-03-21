from django.db import models

class Category(models.Model):
    category_name = models.CharField(max_length=20, unique=True)
    
    def __str__(self):
        return "%s" % self.category_name

class Assignment(models.Model):
    category = models.ForeignKey(Category, related_name='assignments', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)        

    class Meta:
        unique_together = [['title','description']]
        