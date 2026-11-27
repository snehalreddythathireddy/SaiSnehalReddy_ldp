
# 1. WRITING TO A FILE

with open("sample.txt", "w") as file:
    file.write("Welcome to Python\n")
    file.write("Learning File Handling")


# 2. READING A FILE

with open("sample.txt", "r") as file:
    content = file.read()
    print(content)


# 3. APPENDING TO A FILE

with open("sample.txt", "a") as file:
    file.write("\nPython Programming")


# 4. READING LINE BY LINE

with open("sample.txt", "r") as file:
    line = file.readline()
    print(line)


# 5. READING ALL LINES

with open("sample.txt", "r") as file:
    lines = file.readlines()
    print(lines)


# 6. ITERATING THROUGH A FILE

with open("sample.txt", "r") as file:
    for line in file:
        print(line.strip())


# 7. WRITING MULTIPLE LINES

lines = ["Python\n", "Java\n", "SQL\n"]

with open("languages.txt", "w") as file:
    file.writelines(lines)


# 8. CHECKING FILE EXISTENCE

import os

if os.path.exists("sample.txt"):
    print("File exists")
else:
    print("File does not exist")


# 9. DELETING A FILE

if os.path.exists("sample.txt"):
    os.remove("sample.txt")


# 10. FILE MODES

# r - Read
# w - Write
# a - Append
# x - Create
# r+ - Read and write


# 11. SEEK AND TELL

with open("languages.txt", "r") as file:
    print(file.tell())
    file.seek(0)
    print(file.read())
    print(file.tell())


# 12. EXCEPTION HANDLING WITH FILES

try:
    with open("unknown.txt", "r") as file:
        print(file.read())

except FileNotFoundError:
    print("File not found")

finally:
    print("File operation completed")
