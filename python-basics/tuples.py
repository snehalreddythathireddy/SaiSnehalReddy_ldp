numbers = (10, 20, 30, 40, 20)

print(numbers[0])
print(numbers[-1])
print(numbers[1:4])

print(len(numbers))
print(numbers.count(20))
print(numbers.index(30))


person = ("Snehal", 21, "CSE")

name, age, branch = person

print(name, age, branch)

# Tuple conversion
my_list = [1, 2, 3]
my_tuple = tuple(my_list)