from django import forms
from .models import face

class newForm(forms.ModelForm):
    class Meta:
        model = face
        fields = ("bad" ,"good", "best")