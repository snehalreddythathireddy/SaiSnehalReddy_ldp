student = {
    "name": "Snehal",
    "age": 21,
    "branch": "CSE",
    "cgpa": 8.2
}

print(student["name"])
print(student.get("age"))

student["college"] = "GPCET"
student["cgpa"] = 8.5

print(student.keys())
print(student.values())
print(student.items())

student.update({"age": 22})
student.pop("branch")

print(len(student))
print(student)