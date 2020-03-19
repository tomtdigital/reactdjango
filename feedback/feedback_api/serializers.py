from rest_framework import serializers
from feedback_api.models import Subject, Assignment
from django.shortcuts import get_object_or_404

class SubjectsSerializer(serializers.ModelSerializer):
    assignments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Subject
        fields = ['subject_name', 'assignments']

class AssignmentsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Assignment
        fields = '__all__'
    
    subject = serializers.CharField()
    # subject_id = serializers.ReadOnlyField()


    def create(self, validated_data):
        get_subject = validated_data.pop('subject')
        subject_instance, created = Subject.objects.get_or_create(subject_name=get_subject)
        assignment_instance = Assignment.objects.create(**validated_data, subject=subject_instance)
        return assignment_instance




        