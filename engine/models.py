from django.db import models

# Create your models here.

class ClientAccount(models.Model):
    accountID = models.IntegerField(unique=True,max_length =15)
    name = models.CharField(max_length = 10)
    
class TransRecord(models.Model):
    code = models.IntegerField(max_length = 6)
    date = models.DateTimeField(max_length = 10)
    dealAmount = models.IntegerField(max_length = 10)
    dealID = models.IntegerField(max_length = 10)
    dealPrice = models.FloatField(max_length = 10)
    entrustID = models.IntegerField(unique=True, max_length = 10)
    tradeAccount = models.ForeignKey(ClientAccount)

class ClientTransRecord(models.Model):
    accountID = models.ForeignKey(ClientAccount)
    code = models.IntegerField(max_length = 10)
    amount = models.IntegerField(max_length = 10)

class Dealer(models.Model):
    name = models.CharField(unique=True,max_length = 10)
    password = models.CharField(max_length = 20)
