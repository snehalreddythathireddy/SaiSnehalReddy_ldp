
# 1. BASIC GENERATOR

def numbers():
    yield 10
    yield 20
    yield 30


result = numbers()

print(next(result))
print(next(result))
print(next(result))


# 2. GENERATOR USING FOR LOOP

def generate_numbers():
    for i in range(1, 6):
        yield i


for num in generate_numbers():
    print(num)


# 3. GENERATOR WITH CONDITIONS

def even_numbers():
    for i in range(1, 11):
        if i % 2 == 0:
            yield i


for num in even_numbers():
    print(num)


# 4. GENERATOR EXPRESSION

numbers = (x * x for x in range(1, 6))

for num in numbers:
    print(num)


# 5. GENERATOR WITH NEXT()

def fruits():
    yield "Apple"
    yield "Banana"
    yield "Mango"


result = fruits()

print(next(result))
print(next(result))
print(next(result))


# 6. GENERATOR WITH SEND()

def generator():
    value = yield "Start"
    yield value


g = generator()

print(next(g))
print(g.send("Python"))


# 7. FIBONACCI GENERATOR

def fibonacci(n):
    a, b = 0, 1

    for i in range(n):
        yield a
        a, b = b, a + b


for num in fibonacci(10):
    print(num)


# 8. GENERATOR WITH SUM

def generate_numbers():
    for i in range(1, 6):
        yield i


total = sum(generate_numbers())
print(total)
