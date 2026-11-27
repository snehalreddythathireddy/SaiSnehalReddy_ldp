
# 1. BASIC DECORATOR

def decorator(func):

    def wrapper():
        print("Before function execution")
        func()
        print("After function execution")

    return wrapper


@decorator
def greet():
    print("Hello Python")


greet()


# 2. DECORATOR WITH ARGUMENTS

def decorator(func):

    def wrapper(name):
        print("Function started")
        func(name)
        print("Function completed")

    return wrapper


@decorator
def greet(name):
    print("Hello", name)


greet("Snehal")


# 3. DECORATOR WITH RETURN VALUE

def decorator(func):

    def wrapper(a, b):
        result = func(a, b)
        return result * 2

    return wrapper


@decorator
def add(a, b):
    return a + b


print(add(10, 20))


# 4. DECORATOR WITH *ARGS AND **KWARGS

def decorator(func):

    def wrapper(*args, **kwargs):
        print("Executing function")
        return func(*args, **kwargs)

    return wrapper


@decorator
def student(name, age, branch):
    print(name, age, branch)


student("Snehal", age=21, branch="CSE")


# 5. MULTIPLE DECORATORS

def first(func):

    def wrapper():
        print("First decorator")
        func()

    return wrapper


def second(func):

    def wrapper():
        print("Second decorator")
        func()

    return wrapper


@first
@second
def display():
    print("Main function")


display()


# 6. DECORATOR WITHOUT @ SYMBOL

def my_decorator(func):

    def wrapper():
        print("Before execution")
        func()

    return wrapper


def greet():
    print("Hello")


result = my_decorator(greet)
result()


# 7. USING FUNCTOOLS WRAPS

from functools import wraps

def my_decorator(func):

    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)

    return wrapper


@my_decorator
def display():
    print("Python Decorators")


display()
print(display.__name__)
