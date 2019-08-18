# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    USER_TYPES = (
        'ADMIN',
        'CUSTOMER',
    )

    # redundant name, but `type` is too generic (and overwrites built in `type`)
    user_type = models.fields.CharField(max_length=16)
