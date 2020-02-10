from django.db import models

class Subject(models.Model):
    subject_name = models.CharField(max_length=20)
    
    def __str__(self):
        return "%s" % self.subject_name

class Assignment(models.Model):
    subject = models.ForeignKey('Subject', default=None, null=True, on_delete=models.PROTECT, related_name='subject_asignment')
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
        