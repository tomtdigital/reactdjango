from feedback_api.models import Category, Task
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer, TaskSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    filterset_fields = ['category_name', 'tasks']
    permission_classes = [
        permissions.AllowAny
        ]
    serializer_class = CategorySerializer

class TaskViewSet(viewsets.ModelViewSet):
    # queryset = Task.objects.all()
    filterset_fields = {
        'category':['exact'], 
        'title':['exact'], 
        'description':['exact','contains']}
    permission_classes = [
        permissions.IsAuthenticated
        ]
    serializer_class = TaskSerializer
    
    def get_queryset(self):
        return self.user.tasks.all
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)