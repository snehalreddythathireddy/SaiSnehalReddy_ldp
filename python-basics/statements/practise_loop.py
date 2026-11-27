for i in range(1, 11, 2):
    print(i)

fruits = ["Apple", "Banana", "Mango"]

for index, fruit in enumerate(fruits):
    print(index, fruit)

names = ["Snehal", "Rahul", "Priya"]
marks = [90, 85, 95]

#zip() to combine two lists
for name, mark in zip(names, marks):
    print(name, mark)

numbers = [10, 20, 30, 40]

print(20 in numbers)
print(50 not in numbers)

numbers1 = [10, 20, 30, 40]

print(min(numbers1))
print(max(numbers1))
print(sum(numbers1))

import random

print(random.randint(1, 100))
print(random.choice(["Red", "Blue", "Green"]))