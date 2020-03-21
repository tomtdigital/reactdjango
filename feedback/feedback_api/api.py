from feedback_api.models import Category, Task
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer, TaskSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [
        permissions.AllowAny
        ]
    serializer_class = CategorySerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [
        permissions.AllowAny
        ]
    serializer_class = TaskSerializer
