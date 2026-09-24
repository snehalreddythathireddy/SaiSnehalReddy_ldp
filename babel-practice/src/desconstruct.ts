const student: {
  names: string;
  age: number;
  course: string;
} = {
  names: "Snehal",
  age: 20,
  course: "TypeScript",
};

const { names: studentName, age, course: courseName } = student;

console.log(studentName);
console.log(age);
console.log(courseName);