
from rest_framework import routers
from .api import CategoryViewSet, AssignmentsViewSet

router = routers.DefaultRouter()
router.register('api/categories', CategoryViewSet, 'categories')
router.register('api/assignments', AssignmentsViewSet, 'assignments')

urlpatterns = router.urls