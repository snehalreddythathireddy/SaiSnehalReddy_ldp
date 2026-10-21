import pandas as pd

s = pd.Series([10, 20, 30, 40, 50])
print("Series:")
print(s)

data = {
    'Name': ['Sneha', 'Ravi', 'Priya', 'Rahul'],
    'Age': [21, 20, 22, 19],
    'Marks': [92, 85, 88, 78]
}

df = pd.DataFrame(data)

print("\nDataFrame:")
print(df)

print("\nFirst Two Rows:")
print(df.head(2))

print("\nShape:", df.shape)
print("Columns:", df.columns)
print("Data Types:")
print(df.dtypes)



data1 = {
    'Name': ['Sneha', 'Ravi', 'Priya', 'Rahul', 'Arjun'],
    'Age': [21, 20, 22, 19, 21],
    'Marks': [92, 85, 88, 78, 95],
    'City': ['Vijayawada', 'Hyderabad', 'Chennai',
             'Vijayawada', 'Hyderabad']
}

df = pd.DataFrame(data1)

print("Complete DataFrame:")
print(df)

print("\nName Column:")
print(df['Name'])

print("\nName and Marks Columns:")
print(df[['Name', 'Marks']])

print("\nStudents scoring above 85:")
print(df[df['Marks'] > 85])

print("\nStudents aged 21 or above:")
print(df[df['Age'] >= 21])

print("\nFirst Three Rows:")
print(df.head(3))

print("\nLast Two Rows:")
print(df.tail(2))

print("\nStatistical Summary:")
print(df.describe())
df['Grade'] = ['A', 'B', 'A', 'C', 'A']
print("After Adding Grade:")
print(df)

# Modify a column
df['Marks'] = df['Marks'] + 5
print("\nAfter Adding 5 Marks:")
print(df)

# Update a specific value
df.loc[df['Name'] == 'Sneha', 'City'] = 'Bengaluru'
print("\nAfter Updating Sneha's City:")
print(df)

# Sort in ascending order
print("\nSorted by Marks (Ascending):")
print(df.sort_values(by='Marks'))

# Sort in descending order
print("\nSorted by Marks (Descending):")
print(df.sort_values(by='Marks', ascending=False))

# Set Name as index
df.set_index('Name', inplace=True)
print("\nAfter Setting Name as Index:")
print(df)

# Access a row using loc
print("\nPriya's Record:")
print(df.loc['Priya'])

# Access rows using iloc
print("\nFirst Two Rows:")
print(df.iloc[:2])

# Delete a column
df.drop(columns=['City'], inplace=True)
print("\nAfter Deleting City Column:")
print(df)

# Delete a row
df.drop(index='Rahul', inplace=True)
print("\nAfter Deleting Rahul's Record:")
print(df)
print("Original DataFrame:")
print(df)

import numpy as np

data2 = {
    'Name': ['Sneha', 'Ravi', 'Priya', 'Rahul'],
    'Age': [21, np.nan, 22, 19],
    'Marks': [92, 85, np.nan, 78],
    'City': ['Vijayawada', None, 'Chennai', 'Hyderabad']
}

df = pd.DataFrame(data2)

print("Original DataFrame:")
print(df)

print("\nMissing Values:")
print(df.isnull())

print("\nCount of Missing Values:")
print(df.isnull().sum())

print("\nRemove Rows with Missing Values:")
print(df.dropna())

print("\nFill Missing Age with Mean:")
df['Age'] = df['Age'].fillna(df['Age'].mean())
print(df)

print("\nFill Missing Marks with 0:")
df['Marks'] = df['Marks'].fillna(0)
print(df)

print("\nFill Missing City with Unknown:")
df['City'] = df['City'].fillna('Unknown')
print(df)

print("\nFinal DataFrame:")
print(df)