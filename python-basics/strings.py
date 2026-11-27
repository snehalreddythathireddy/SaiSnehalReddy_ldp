name = "Python Programming"

print(name)
print(len(name))

# Concatenation
first = "Hello"
second = "World"
print(first + " " + second)

# Repetition
print(first * 3)

# String membership
print("Python" in name)

text = "PythonProgramming"

# Positive indexing
print(text[0])
print(text[1])
print(text[5])

# Negative indexing
print(text[-1])
print(text[-2])

# Slicing
print(text[0:6])
print(text[6:])
print(text[:6])
print(text[::2])
print(text[::-1])

text1 = "  python programming  "

print(text1.upper())
print(text1.lower())
print(text1.capitalize())
print(text1.title())
print(text1.strip())
print(text1.replace("python", "Java"))
print(text1.find("programming"))
print(text1.count("m"))
print(text1.startswith("python"))
print(text1.endswith(" "))
print(text1.split())

# String immutability
name1 = "Python"
name1 = name1.upper()
print(name1)