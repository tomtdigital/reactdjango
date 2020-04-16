from rest_framework import serializers
from feedback_api.models import Category, Task, Profile
from django.shortcuts import get_object_or_404

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['id','category_name', 'tasks', 'owner']

class TaskSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Task
        fields = '__all__'
    
    category = serializers.CharField()

    def create(self, validated_data):
        user =  self.context['request'].user
        get_category = validated_data.pop('category')
        category_instance, created = Category.objects.get_or_create(category_name=get_category, owner=user)
        task_instance = Task.objects.create(**validated_data, category=category_instance)
        return task_instance

    def update(self, instance, validated_data):
        user =  self.context['request'].user
        get_category = validated_data.pop('category')
        category_instance, created = Category.objects.get_or_create(category_name=get_category, owner=user)
        instance.category = category_instance
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance        