from feedback_api.models import Category, Assignment
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer, AssignmentsSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [
        permissions.AllowAny
        ]
    serializer_class = CategorySerializer

class AssignmentsViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    permission_classes = [
        permissions.AllowAny
        ]
    serializer_class = AssignmentsSerializer
