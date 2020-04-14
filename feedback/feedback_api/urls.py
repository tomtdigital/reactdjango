
from rest_framework import routers
from .api import CategoryViewSet, TaskViewSet, ProfileViewSet

router = routers.DefaultRouter()
router.register('api/profile', ProfileViewSet, 'profile')
router.register('api/categories', CategoryViewSet, 'categories')
router.register('api/tasks', TaskViewSet, 'tasks')

urlpatterns = router.urls