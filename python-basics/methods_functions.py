# Function without arguments
def greet():
    print("Hello Python")

greet()


# Function with arguments
def add(a, b):
    print(a + b)

add(10, 20)


# Function with return
def multiply(a, b):
    return a * b

result = multiply(5, 4)
print(result)

# Positional Arguments
def student(name, age):
    print(name, age)

student("Snehal", 21)


# Keyword Arguments
def details(name, age):
    print(name, age)

details(age=21, name="Snehal")


# Default Arguments
def greet(name="Python"):
    print("Hello", name)

greet()
greet("Snehal")


# Variable Length Arguments (*args)
def add(*numbers):
    print(sum(numbers))

add(10, 20, 30, 40)


# Keyword Variable Length Arguments (**kwargs)
def student(**details):
    print(details)

student(name="Snehal", age=21, branch="CSE")

# Lambda Function
square = lambda x: x * x
print(square(5))


# Lambda with two arguments
add = lambda a, b: a + b
print(add(10, 20))


# Lambda with condition
check = lambda x: "Even" if x % 2 == 0 else "Odd"
print(check(10))

# Length
numbers = [10, 20, 30, 40]
print(len(numbers))

# Maximum
print(max(numbers))

# Minimum
print(min(numbers))

# Sum
print(sum(numbers))

# Sorted
print(sorted(numbers, reverse=True))

# Absolute
print(abs(-25))

# Round
print(round(10.567, 2))

# Enumerate
for index, value in enumerate(numbers):
    print(index, value)

# Zip
names = ["Snehal", "Rahul"]
marks = [90, 85]

for name, mark in zip(names, marks):
    print(name, mark)

# Map
numbers = [1, 2, 3, 4, 5]

result = list(map(lambda x: x * 2, numbers))
print(result)


# Filter
result = list(filter(lambda x: x % 2 == 0, numbers))
print(result)


# Reduce
from functools import reduce

result = reduce(lambda a, b: a + b, numbers)
print(result)

# Global Variable
x = 100

def display():
    print(x)

display()


# Local Variable
def show():
    y = 50
    print(y)

show()


# Global Keyword
count = 0

def update():
    global count
    count += 1

update()
print(count)

# Factorial using Recursion
def factorial(n):
    if n == 0 or n == 1:
        return 1

    return n * factorial(n - 1)

print(factorial(5))


# Sum of Natural Numbers
def natural_sum(n):
    if n == 0:
        return 0

    return n + natural_sum(n - 1)

print(natural_sum(10))


# String Methods
name = "python programming"

print(name.upper())
print(name.lower())
print(name.title())
print(name.capitalize())
print(name.replace("python", "java"))


# List Methods
numbers = [10, 20, 30]

numbers.append(40)
numbers.insert(1, 15)
numbers.remove(20)
numbers.sort()

print(numbers)


# Dictionary Methods
student = {"name": "Snehal", "age": 21}

print(student.keys())
print(student.values())
print(student.items())

student.update({"age": 22})
print(student)


# Set Methods
a = {1, 2, 3}
b = {3, 4, 5}

print(a.union(b))
print(a.intersection(b))
print(a.difference(b))