import numpy as np

arr = np.array([10, 20, 30, 40, 50])

print("Array:", arr)
print("Data type:", arr.dtype)
print("Dimensions:", arr.ndim)
print("Shape:", arr.shape)
import numpy as np

arr1 = np.arange(1, 11)

print("Array:", arr1)
print("Number of elements:", arr1.size)
print("Sum:", np.sum(arr1))
print("Average:", np.mean(arr1))



arr2 = np.array([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

print("Array:")
print(arr2)

print("Dimensions:", arr2.ndim)
print("Shape:", arr2.shape)
print("Number of elements:", arr2.size)
print("Data type:", arr2.dtype)


arr3 = np.array([10, 20, 30, 40, 50])

print("Original Array:", arr3)
print("First Element:", arr3[0])
print("Last Element:", arr3[-1])
print("First Three Elements:", arr3[:3])
print("Elements from Index 1 to 3:", arr3[1:4])
print("Reversed Array:", arr3[::-1])


a = np.array([10, 20, 30, 40, 50])
b = np.array([1, 2, 3, 4, 5])

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Power:", a ** 2)
print("Greater than 25:", a > 25)

import numpy as np

arr4 = np.array([[10, 20, 30],
                [40, 50, 60],
                [70, 80, 90]])

print("Sum:", np.sum(arr4))
print("Mean:", np.mean(arr4))
print("Maximum:", np.max(arr4))
print("Minimum:", np.min(arr4))
print("Standard Deviation:", np.std(arr4))

print("Row-wise Sum:", np.sum(arr4, axis=1))
print("Column-wise Sum:", np.sum(arr4, axis=0))

print("Row-wise Mean:", np.mean(arr4, axis=1))
print("Column-wise Mean:", np.mean(arr4, axis=0))


arr5 = np.array([10, 20, 30, 40, 50])

print("Original Array:", arr5)

print("Array of Zeros:")
print(np.zeros(5))

print("Array of Ones:")
print(np.ones(5))

print("Array of Random Numbers:")
print(np.random.rand(5))

print("Array using arange:")
print(np.arange(1, 11, 2))

print("Array using linspace:")
print(np.linspace(1, 10, 5))


arr6 = np.array([10, 20, 30, 40, 50, 60])

print("Original Array:", arr6)

print("Reshaped into 2x3:")
print(arr6.reshape(2, 3))

print("Reshaped into 3x2:")
print(arr6.reshape(3, 2))

print("Flattened Array:")
print(arr6.reshape(2, 3).flatten())

print("Transposed Array:")
print(arr6.reshape(2, 3).T)



arr7 = np.array([10, 20, 30, 40, 50])

print("Original Array:", arr7)

print("Sorted Array:", np.sort(arr7))

print("Maximum Element Index:", np.argmax(arr7))

print("Minimum Element Index:", np.argmin(arr7))

print("Unique Elements:", np.unique(arr7))

print("Array after Adding 5:", np.append(arr7, 5))

print("Array after Deleting Element at Index 2:",
      np.delete(arr7, 2))