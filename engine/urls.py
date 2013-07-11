#encoding:utf-8

'''
Created on 2013年7月10日

@author: Sysu
'''

from django.conf.urls import patterns, url

import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
)