from django.db import models

class Subject(models.Model):
    subject_name = models.CharField(max_length=20)
    
    def __str__(self):
        return "%s" % self.subject_name

class Assignment(models.Model):
    subject = models.ForeignKey(Subject, related_name='assignments', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)

    # @property
    # def subject_id(self):
    #     return self.subject.id
        