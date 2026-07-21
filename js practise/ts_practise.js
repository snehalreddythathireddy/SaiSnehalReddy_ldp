"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let surName = "Snehal";
let age = 20;
let isStudent = true;
console.log(surName);
console.log(age);
console.log(isStudent);
let numbers = [10, 20, 30, 40];
console.log(numbers);
console.log(numbers[2]);
let student = [101, "Snehal"];
console.log(student);
var Days2;
(function (Days2) {
    Days2[Days2["Monday"] = 0] = "Monday";
    Days2[Days2["Tuesday"] = 1] = "Tuesday";
    Days2[Days2["Wednesday"] = 2] = "Wednesday";
    Days2[Days2["Thursday"] = 3] = "Thursday";
    Days2[Days2["Friday"] = 4] = "Friday";
})(Days2 || (Days2 = {}));
console.log(Days2.Wednesday);
function add10(a, b) {
    return a + b;
}
console.log(add10(10, 20));
const square = (num) => {
    return num * num;
};
console.log(square(5));
function greet0(name, city) {
    console.log(name);
    if (city) {
        console.log(city);
    }
}
greet0("Snehal");
greet0("Snehal", "Anantapur");
function greeting1(name = "Guest") {
    console.log(name);
}
greeting1();
greeting1("Snehal");
let students = {
    name: "Snehal",
    age: 20
};
console.log(students.name);
let s1 = {
    name: "Snehal",
    age: 20,
    cgpa: 8.2
};
console.log(s1);
let emp = {
    id: 1,
    name: "Rahul",
    salary: 50000
};
console.log(emp);
let id;
id = 101;
id = "EMP101";
console.log(id);
let value = "Hello TypeScript";
let length1 = value.length;
console.log(length1);
class Student2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name);
        console.log(this.age);
    }
}
let s = new Student2("Snehal", 20);
s.display();
class Animal {
    eat() {
        console.log("Eating");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}
let d = new Dog();
d.eat();
d.bark();
class Employee1 {
    name;
    salary;
    id;
    constructor(name, salary, id) {
        this.name = name;
        this.salary = salary;
        this.id = id;
    }
}
class Shape {
}
class Circle extends Shape {
    radius = 5;
    area() {
        return 3.14 * this.radius * this.radius;
    }
}
let c = new Circle();
console.log(c.area());
function displays(value) {
    return value;
}
console.log(displays(10));
console.log(displays("Snehal"));
let d1 = {
    value: "Hello"
};
console.log(d1);
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
}
let b = new Box(100);
console.log(b.value);
async function fetchDataz() {
    return "Data Received";
}
fetchDataz().then(result => console.log(result));
let promise = new Promise((resolve, reject) => {
    resolve("Success");
});
promise.then(result => console.log(result));
//# sourceMappingURL=ts_practise.js.map