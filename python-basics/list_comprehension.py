numbers = [1, 2, 3, 4, 5]
squares = [num ** 2 for num in numbers]
print(squares)

numbers1 = [1, 2, 3, 4, 5, 6, 7, 8]
even = [num for num in numbers1 if num % 2 == 0]
print(even)

#String list
words = ["python", "java", "react"]
result = [word.upper() for word in words]
print(result)

#Nested list comprehension
matrix = [[1, 2], [3, 4], [5, 6]]
result = [num for row in matrix for num in row]
print(result)