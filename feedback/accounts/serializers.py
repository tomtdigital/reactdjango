from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from feedback_api.serializers import ProfileSerializer
from feedback_api.models import Profile
from rest_framework import serializers

User._meta.get_field('email')._unique = True


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class RegisterSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        
        profile_data = validated_data.pop('profile')
        # create profile
        profile = Profile.objects.create(
            first_name = profile_data['first_name'],
            last_name = profile_data['last_name'],           
            age = profile_data['age'],
            about_me = profile_data['about_me'],
            owner = user
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")