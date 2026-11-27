numbers = [10, 20, 30, 40, 50]

print(numbers[0])
print(numbers[-1])
print(numbers[1:4])

numbers.append(60)
numbers.extend([70, 80])
numbers.insert(1, 15)

numbers.remove(30)
numbers.pop()
numbers.sort()
numbers.reverse()

print(numbers)
print(len(numbers))
print(min(numbers))
print(max(numbers))
print(sum(numbers))
print(numbers.index(40))
print(numbers.count(20))