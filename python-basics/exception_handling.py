
# TYPES OF ERRORS

# Syntax Error
# if 10 > 5
#     print("Hello")

# Runtime Error
# a = 10
# b = 0
# print(a / b)

# Logical Error
a = 10
b = 20
result = a - b
print(result)


# 2. COMMON BUILT-IN EXCEPTIONS

# ZeroDivisionError
# print(10 / 0)

# ValueError
# num = int("Python")

# TypeError
# print("Age: " + 21)

# IndexError
# numbers = [10, 20, 30]
# print(numbers[5])

# KeyError
# student = {"name": "Snehal"}
# print(student["age"])

# NameError
# print(username)

# AttributeError
# num = 10
# num.append(20)

# FileNotFoundError
# with open("unknown.txt", "r") as file:
#     print(file.read())


# 3. TRY AND EXCEPT

try:
    a = 10
    b = 0
    print(a / b)

except ZeroDivisionError:
    print("Cannot divide by zero")


# 4. MULTIPLE EXCEPT BLOCKS

try:
    num = int(input("Enter a number: "))
    result = 100 / num
    print(result)

except ValueError:
    print("Please enter a valid integer")

except ZeroDivisionError:
    print("Cannot divide by zero")

except TypeError:
    print("Invalid data type")


# 5. GENERIC EXCEPT BLOCK

try:
    num = int(input("Enter a number: "))
    print(100 / num)

except Exception as e:
    print("Error:", e)


# 6. ELSE BLOCK

try:
    a = 10
    b = 2
    result = a / b

except ZeroDivisionError:
    print("Cannot divide by zero")

else:
    print("Result:", result)


# 7. FINALLY BLOCK

try:
    num = int(input("Enter a number: "))
    print(100 / num)

except ZeroDivisionError:
    print("Cannot divide by zero")

except ValueError:
    print("Invalid input")

finally:
    print("Program execution completed")


# 8. RAISE KEYWORD

age = int(input("Enter your age: "))

if age < 18:
    raise ValueError("Age must be 18 or above")

print("Eligible")


# 9. CUSTOM EXCEPTIONS

class InvalidAgeError(Exception):
    pass


age = int(input("Enter your age: "))

try:
    if age < 18:
        raise InvalidAgeError("Age must be 18 or above")

    print("Eligible")

except InvalidAgeError as e:
    print(e)


# 10. EXCEPTION HANDLING INSIDE FUNCTIONS

def divide(a, b):
    try:
        return a / b

    except ZeroDivisionError:
        return "Cannot divide by zero"


result = divide(10, 0)
print(result)


# 11. NESTED TRY AND EXCEPT

try:
    num = int(input("Enter a number: "))

    try:
        result = 100 / num
        print(result)

    except ZeroDivisionError:
        print("Cannot divide by zero")

except ValueError:
    print("Please enter a valid number")


# 12. FILE HANDLING WITH EXCEPTION HANDLING

try:
    with open("sample.txt", "r") as file:
        content = file.read()
        print(content)

except FileNotFoundError:
    print("File does not exist")

except PermissionError:
    print("Permission denied")

finally:
    print("File operation completed")
