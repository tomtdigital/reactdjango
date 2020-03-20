from rest_framework import serializers
from feedback_api.models import Category, Assignment
from django.shortcuts import get_object_or_404

class CategorySerializer(serializers.ModelSerializer):
    assignments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['id','category_name', 'assignments']

class AssignmentsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Assignment
        fields = '__all__'
    
    category = serializers.CharField()

    def create(self, validated_data):
        get_category = validated_data.pop('category')
        category_instance, created = Category.objects.get_or_create(category_name=get_category)
        assignment_instance = Assignment.objects.create(**validated_data, category=category_instance)
        return assignment_instance




        