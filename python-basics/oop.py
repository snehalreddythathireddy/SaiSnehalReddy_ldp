
# 1. CLASSES AND OBJECTS

class Student:
    name = "Snehal"
    age = 21

s1 = Student()

print(s1.name)
print(s1.age)


# 2. CONSTRUCTOR (__init__)

class StudentDetails:

    def __init__(self, name, age):
        self.name = name
        self.age = age

s1 = StudentDetails("Snehal", 21)
s2 = StudentDetails("Rahul", 22)

print(s1.name)
print(s2.name)


# 3. INSTANCE VARIABLES AND METHODS

class StudentInfo:

    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def display(self):
        print(self.name)
        print(self.marks)

    def calculate_grade(self):
        if self.marks >= 90:
            return "A"
        else:
            return "B"

s1 = StudentInfo("Snehal", 95)

s1.display()
print(s1.calculate_grade())


# 4. CLASS VARIABLES AND CLASS METHODS

class College:

    college = "GPCET"
    count = 0

    def __init__(self, name):
        self.name = name
        College.count += 1

    @classmethod
    def display_count(cls):
        print(cls.count)
        print(cls.college)

s1 = College("Snehal")
s2 = College("Rahul")

College.display_count()


# 5. STATIC METHODS

class Calculator:

    @staticmethod
    def add(a, b):
        return a + b

    @staticmethod
    def multiply(a, b):
        return a * b

print(Calculator.add(10, 20))
print(Calculator.multiply(5, 4))


# 6. SINGLE INHERITANCE

class Animal:

    def eat(self):
        print("Animal is eating")

class Dog(Animal):

    def bark(self):
        print("Dog is barking")

d = Dog()

d.eat()
d.bark()


# 7. TYPES OF INHERITANCE
# Single Inheritance

class Parent:
    def display(self):
        print("Parent class")

class Child(Parent):
    def show(self):
        print("Child class")

obj = Child()
obj.display()
obj.show()


# Multilevel Inheritance

class Grandparent:
    def display1(self):
        print("Grandparent")

class Parent1(Grandparent):
    def display2(self):
        print("Parent")

class Child1(Parent1):
    def display3(self):
        print("Child")

obj = Child1()
obj.display1()
obj.display2()
obj.display3()


# Multiple Inheritance

class Father:
    def father_method(self):
        print("Father class")

class Mother:
    def mother_method(self):
        print("Mother class")

class Child2(Father, Mother):
    def child_method(self):
        print("Child class")

obj = Child2()
obj.father_method()
obj.mother_method()
obj.child_method()


# Hierarchical Inheritance

class Parent2:
    def display(self):
        print("Parent class")

class Child3(Parent2):
    def show1(self):
        print("Child 1")

class Child4(Parent2):
    def show2(self):
        print("Child 2")

obj1 = Child3()
obj2 = Child4()

obj1.display()
obj2.display()


# 8. SUPER() FUNCTION

class Parent3:

    def __init__(self, name):
        self.name = name

    def display(self):
        print(self.name)

class Child5(Parent3):

    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

    def show(self):
        super().display()
        print(self.age)

obj = Child5("Snehal", 21)
obj.show()


# 9. METHOD OVERRIDING

class Animal1:

    def sound(self):
        print("Animal makes sound")

class Dog1(Animal1):

    def sound(self):
        print("Dog barks")

obj = Dog1()
obj.sound()


# 10. POLYMORPHISM

class Dog2:

    def sound(self):
        print("Bark")

class Cat:

    def sound(self):
        print("Meow")

class Cow:

    def sound(self):
        print("Moo")

animals = [Dog2(), Cat(), Cow()]

for animal in animals:
    animal.sound()


# 11. ENCAPSULATION

class BankAccount:

    def __init__(self, balance):
        self.__balance = balance

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount

    def display(self):
        print(self.__balance)

account = BankAccount(10000)

account.deposit(5000)
account.withdraw(2000)
account.display()


# 12. GETTERS AND SETTERS

class StudentMarks:

    def __init__(self, marks):
        self.__marks = marks

    @property
    def marks(self):
        return self.__marks

    @marks.setter
    def marks(self, value):
        if 0 <= value <= 100:
            self.__marks = value
        else:
            raise ValueError("Invalid marks")

s1 = StudentMarks(85)

print(s1.marks)

s1.marks = 95

print(s1.marks)


# 13. ABSTRACTION

from abc import ABC, abstractmethod

class Vehicle(ABC):

    @abstractmethod
    def start(self):
        pass

    @abstractmethod
    def stop(self):
        pass

class Car(Vehicle):

    def start(self):
        print("Car started")

    def stop(self):
        print("Car stopped")

c = Car()

c.start()
c.stop()


# 14. MAGIC / DUNDER METHODS

class StudentRecord:

    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def __str__(self):
        return self.name

    def __len__(self):
        return len(self.name)

    def __add__(self, other):
        return self.marks + other.marks

s1 = StudentRecord("Snehal", 90)
s2 = StudentRecord("Rahul", 85)

print(s1)
print(len(s1))
print(s1 + s2)
