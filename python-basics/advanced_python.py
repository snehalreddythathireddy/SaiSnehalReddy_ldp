
# 1. COLLECTIONS MODULE

from collections import Counter, defaultdict, namedtuple, deque

numbers = [1, 2, 2, 3, 3, 3]

# Counter
print(Counter(numbers))

# defaultdict
students = defaultdict(list)
students["Snehal"].append("Python")
print(students)

# namedtuple
Student = namedtuple("Student", ["name", "age"])
s1 = Student("Snehal", 21)
print(s1.name)

# deque
queue = deque([10, 20, 30])
queue.append(40)
queue.appendleft(5)
queue.pop()
print(queue)


# 2. OS MODULE

import os

# Current working directory
print(os.getcwd())

# List files and folders
print(os.listdir("."))

# Create a directory
os.makedirs("test_folder", exist_ok=True)

# Check whether a path exists
print(os.path.exists("test_folder"))

# Check whether it is a directory
print(os.path.isdir("test_folder"))

# Check whether it is a file
print(os.path.isfile("sample.txt"))

# Join paths
path = os.path.join("test_folder", "sample.txt")
print(path)


# 3. DATETIME MODULE

from datetime import datetime, date, timedelta

# Current date and time
now = datetime.now()
print(now)

# Current date
today = date.today()
print(today)

# Format date
formatted = now.strftime("%d-%m-%Y")
print(formatted)

# Convert string into datetime
date_string = "27-11-2026"
converted = datetime.strptime(date_string, "%d-%m-%Y")
print(converted)

# Add days
future_date = today + timedelta(days=7)
print(future_date)


# 4. MATH AND RANDOM MODULES

import math
import random

# Math functions
print(math.sqrt(25))
print(math.factorial(5))
print(math.ceil(4.3))
print(math.floor(4.8))
print(math.pi)

# Random functions
print(random.randint(1, 100))
print(random.choice(["Python", "Java", "SQL"]))

numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)
print(numbers)


# 5. PYTHON DEBUGGER

import pdb

def calculate_total(a, b):
    pdb.set_trace()
    result = a + b
    return result

# Uncomment to start the debugger
# print(calculate_total(10, 20))


# 6. REGULAR EXPRESSIONS

import re

text = "My email is snehal@gmail.com and phone is 9876543210"

# Search
result = re.search(r"\d+", text)
print(result.group() if result else None)

# Find all numbers
print(re.findall(r"\d+", text))

# Match email
email = re.search(r"[\w.-]+@[\w.-]+\.\w+", text)
print(email.group() if email else None)

# Replace
print(re.sub(r"\d", "*", text))

# Split
print(re.split(r"\s+", text))

# Check pattern at beginning
print(re.match(r"My", text))

# Validate a 10-digit phone number
phone = "9876543210"
print(bool(re.fullmatch(r"\d{10}", phone)))


# 7. TIMING YOUR PYTHON CODE

import time
import timeit

# Measure execution time
start = time.perf_counter()

total = sum(range(1000000))

end = time.perf_counter()

print("Execution time:", end - start)

# Using timeit
execution_time = timeit.timeit(
    "sum(range(1000))",
    number=1000
)

print("Time taken:", execution_time)


# 8. PATHS USING PATHLIB

from pathlib import Path

# Current directory
current_path = Path.cwd()
print(current_path)

# Create a path
file_path = Path("sample.txt")
print(file_path)

# Check existence
print(file_path.exists())

# Get filename
print(file_path.name)

# Get extension
print(file_path.suffix)

# Get parent directory
print(file_path.parent)

# Read and write files
file_path.write_text("Hello Python")
print(file_path.read_text())


# 9. ZIPPING AND UNZIPPING FILES

import zipfile

# Create a ZIP file
with zipfile.ZipFile("sample.zip", "w") as zip_file:
    zip_file.write("sample.txt")

# Read ZIP contents
with zipfile.ZipFile("sample.zip", "r") as zip_file:
    print(zip_file.namelist())

# Extract ZIP contents
with zipfile.ZipFile("sample.zip", "r") as zip_file:
    zip_file.extractall("extracted_files")
