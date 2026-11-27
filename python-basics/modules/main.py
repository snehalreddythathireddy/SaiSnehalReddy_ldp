# Importing the module

import mymodule

# Calling functions from another file

mymodule.greet("Snehal")

result = mymodule.add(10, 20)

print(result)

from mymodule import greet, add

greet("Snehal")
print(add(10, 20))

#Import using alias
import mymodule as m

m.greet("Snehal")
print(m.add(10, 20))

# BUILT-IN MODULES

import random

print(random.randint(1, 100))
print(random.choice(["Python", "Java", "C++"]))


# Date and Time Module

import datetime

current_date = datetime.date.today()
current_time = datetime.datetime.now()

print(current_date)
print(current_time)


# OS Module

import os

print(os.getcwd())
print(os.listdir())

