from rest_framework import viewsets
from core.models import Resultado
from core.serializers import ResultadoSerializer


class ResultadoViewSet(viewsets.ModelViewSet):
    queryset = Resultado.objects.all()
    serializer_class = ResultadoSerializer
