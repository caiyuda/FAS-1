from django.contrib import admin
from models import ClientAccount,TransRecord,ClientTransRecord,Dealer

admin.site.register(ClientAccount)
admin.site.register(TransRecord)
admin.site.register(ClientTransRecord)
admin.site.register(Dealer)