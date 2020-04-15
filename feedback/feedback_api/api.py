from feedback_api.models import Category, Task
from rest_framework import viewsets, permissions, status
from .serializers import CategorySerializer, TaskSerializer, ProfileSerializer
from knox.auth import TokenAuthentication

class ProfileViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    filterset_fields = ['first_name', 'last_name']
    permission_classes = [
        permissions.IsAuthenticated
        ]
    serializer_class = ProfileSerializer

    def get_queryset(self):
        return self.request.user.profile.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def put(self, request, pk, format=None):
        profile = self.get_object(pk)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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