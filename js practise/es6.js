/*  1. let and const*/

let age = 20;
age = 21;
console.log(age);

const PI = 3.14;
console.log(PI);

/*    2. Arrow Function*/
const greet = (name) => {
    console.log("Hello " + name);
};
greet("Snehal");
const add = (a, b) => a + b;
console.log(add(10, 20));

/*  3. Template Literals*/

let name = "Snehal";
let city = "Hyderabad";
console.log(`My name is ${name} and I live in ${city}`);

/*  4. Default Parameters */

function display(country = "India") {
    console.log(country);
}
display();
display("USA");

/* 5. Destructuring Objects */

const student = {
    sname: "Snehal",
    marks: 90,
    branch: "CSE"
};
const { sname, marks, branch } = student;
console.log(sname);
console.log(marks);
console.log(branch);

/* 6. Array Destructuring */

const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);

/* 7. Spread Operator */

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

/* 8. Rest Operator */

function sum(...nums) {
    console.log(nums);
}
sum(10, 20, 30, 40);

/*  9. for...of */

let fruits = ["Apple", "Mango", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

/* 10. Classes */

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(this.name);
        console.log(this.salary);
    }
}
const emp = new Employee("Snehal", 50000);
emp.display();

/* 11. Promises */

let promise = new Promise((resolve, reject) => {
    resolve("Promise Resolved");
});
promise.then(result => {
    console.log(result);
});

/* 12. Async / Await */

function message() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Async Await Example");
        }, 2000);
    });
}
async function displayMessage() {
    let result = await message();
    console.log(result);
}
displayMessage();

/* 13. Map */

let map = new Map();
map.set("name", "Snehal");
map.set("age", 20);
console.log(map.get("name"));
console.log(map.get("age"));

/* 14. Set */

let set = new Set();
set.add(10);
set.add(20);
set.add(10);
console.log(set);

/*  15. Optional Chaining*/

const person = {
    pname: "Snehal"
};
console.log(person.address?.city);


/* 16. Array map() */

let nums = [1, 2, 3];
let square = nums.map(num => num * num);
console.log(square);

/* 17. filter() */

let even = nums.filter(num => num % 2 == 0);
console.log(even);



/* 18. find()*/

let value = nums.find(num => num > 1);
console.log(value);

/* 19. forEach() */

nums.forEach(num => {
    console.log(num);

});