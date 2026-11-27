numbers = {10, 20, 30, 40, 20}

numbers.add(50)
numbers.update([60, 70])
numbers.remove(30)
numbers.discard(100)

a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a.union(b))
print(a.intersection(b))
print(a.difference(b))
print(a.symmetric_difference(b))

print(len(numbers))
print(2 in a)