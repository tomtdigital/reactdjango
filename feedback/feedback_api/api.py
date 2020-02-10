from feedback_api.models import Subject, Assignment
from rest_framework import viewsets, permissions
from .serializers import SubjectsSerializer, AssignmentsSerializer

class SubjectsViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    permission_classes = [
        permissions.AllowAny
        ]
    serializer_class = SubjectsSerializer

class AssignmentsViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    permission_classes = [
        permissions.AllowAny
        ]
    serializer_class = AssignmentsSerializer
