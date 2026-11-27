a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("Equal:", a == b)
print("Not Equal:", a != b)
print("Greater:", a > b)
print("Smaller:", a < b)
print("Greater or Equal:", a >= b)
print("Smaller or Equal:", a <= b)

first = 10
second = 20

print(first < 15 and second > 15)
print(first > 15 or second > 15)
print(not(first < 15))

name = "Python"

print("P" in name)
print("J" not in name)

#Identity Operators
a1 = [10, 20, 30]
b1 = a1
print(a1 is b1)


"""==	Whether values are equal
is	Whether objects are identical"""

#Bitwise Operators

a2 = 5
b2 = 3

print(a2 & b2)
print(a2 | b2)
print(a2 ^ b2)
print(~a2)
print(a2 << 1)
print(a2 << 2)
print(a2 >> 1)
print(a2 >> 2)