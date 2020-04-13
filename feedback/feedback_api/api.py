from feedback_api.models import Category, Task
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer, TaskSerializer
from knox.auth import TokenAuthentication

class CategoryViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    filterset_fields = ['category_name', 'tasks']
    permission_classes = [
        permissions.IsAuthenticated
        ]
    serializer_class = CategorySerializer

    def get_queryset(self):
        return self.request.user.categories.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class TaskViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    filterset_fields = {
        'category':['exact'], 
        'title':['exact'], 
        'description':['exact','contains']}
    permission_classes = [
        permissions.IsAuthenticated
        ]
    serializer_class = TaskSerializer
    
    def get_queryset(self):
        return self.request.user.tasks.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)