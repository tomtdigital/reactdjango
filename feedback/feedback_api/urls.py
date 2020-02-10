
from rest_framework import routers
from .api import SubjectsViewSet, AssignmentsViewSet

router = routers.DefaultRouter()
router.register('api/subjects', SubjectsViewSet, 'subjects')
router.register('api/assignments', AssignmentsViewSet, 'assignments')

urlpatterns = router.urls