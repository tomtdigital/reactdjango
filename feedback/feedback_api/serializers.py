from rest_framework import serializers
from feedback_api.models import Category, Task
from django.shortcuts import get_object_or_404

class CategorySerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['id','category_name', 'tasks']

class TaskSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Task
        fields = '__all__'
    
    category = serializers.CharField()
    category_id_ = serializers.ReadOnlyField()

    def create(self, validated_data):
        get_category = validated_data.pop('category')
        category_instance, created = Category.objects.get_or_create(category_name=get_category)
        task_instance = Task.objects.create(**validated_data, category=category_instance)
        return task_instance




        