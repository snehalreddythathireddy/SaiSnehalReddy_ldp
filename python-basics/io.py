with open("student.txt", "w") as file:
    file.write("Name: Snehal\n")
    file.write("College: GPCET\n")
    file.write("Branch: CSE\n")

with open("student.txt", "r") as file:
    content = file.read()
    print(content)

with open("student.txt", "a") as file:
    file.write("CGPA: 8.2\n")

with open("student.txt", "r") as file:
    updated_content = file.read()
    print(updated_content)

with open("numbers.txt", "w") as file:
    file.write("10\n")
    file.write("20\n")
    file.write("30\n")
    file.write("40\n")
    file.write("50\n")

with open("numbers.txt", "r") as file:
    numbers = file.readlines()

    total = 0
    count = 0

    for number in numbers:
        total += int(number.strip())
        count += 1

    average = total / count

    print("Sum:", total)
    print("Average:", average)
    print("Total Lines:", count)