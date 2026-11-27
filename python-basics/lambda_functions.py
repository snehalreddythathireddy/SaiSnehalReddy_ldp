
# 1. BASIC LAMBDA FUNCTION

square = lambda x: x * x

print(square(5))


# 2. LAMBDA WITH MULTIPLE ARGUMENTS

add = lambda a, b: a + b

print(add(10, 20))


# 3. LAMBDA WITH CONDITIONS

check = lambda x: "Even" if x % 2 == 0 else "Odd"

print(check(10))


# 4. LAMBDA WITH MAP()

numbers = [1, 2, 3, 4, 5]

result = list(map(lambda x: x * 2, numbers))

print(result)


# 5. LAMBDA WITH FILTER()

numbers = [1, 2, 3, 4, 5, 6]

result = list(filter(lambda x: x % 2 == 0, numbers))

print(result)


# 6. LAMBDA WITH REDUCE()

from functools import reduce

numbers = [1, 2, 3, 4, 5]

result = reduce(lambda a, b: a + b, numbers)

print(result)


# 7. LAMBDA WITH SORTED()

students = [
    ("Snehal", 90),
    ("Rahul", 75),
    ("Priya", 85)
]

result = sorted(students, key=lambda x: x[1])

print(result)


# 8. LAMBDA WITH MAX()

numbers = [10, 50, 20, 80, 30]

result = max(numbers, key=lambda x: x)

print(result)


# 9. NESTED LAMBDA

multiply = lambda x: lambda y: x * y

result = multiply(5)

print(result(4))
