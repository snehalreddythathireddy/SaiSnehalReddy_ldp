var name = "Snehal";
console.log(name);
let age = 21;
age = 22;
console.log(age);
const pi = 3.14;
console.log(pi);
const pi = 3.14;
pi = 3.14159;

let name = "Snehal";        // String
let age = 21;               // Number
let isStudent = true;       // Boolean
let x = null;               // Null
let y;                      // Undefined
let arr = [1,2,3];          // Array
let obj = {name:"Snehal"};  // Object
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof x);       
console.log(typeof y);
console.log(typeof arr);    
console.log(typeof obj);

let a = 10;
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

let a = 20;
let b = "20";
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

let age = 20;
if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}
 
let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}


for (let i = 1; i <= 5; i++) {

    console.log(i);

}


let i1 = 1;
while (i1 <= 5) {
    console.log(i);
    i++;
}


let j = 1;
do {

    console.log(j);

    j++;

} while (j <= 5);

 
let fruits = ["Apple", "Mango", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}


let student = {
    name: "Snehal",
    age: 20,
    city: "Hyderabad"
};
for (let key in student) {
    console.log(key + " : " + student[key]);
}


let str = "JavaScript";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(0,4));
console.log(str.replace("Java","Type"));
console.log(str.includes("Script"));
console.log(str.charAt(2));
console.log(str.indexOf("S"));


let numbers = [10,20,30];
numbers.push(40);
numbers.pop();
console.log(numbers);
console.log(numbers.length);
console.log(numbers.indexOf(30));


let colors = ["Red","Green","Blue"];
colors.forEach(color => {
    console.log(color);
});



const square = (num)=>{
    return num*num;
}
console.log(square(5));


/* Global Scope */
let name = "Snehal"
function display(){
    console.log(name);
}
display();
console.log(name);



/* Local Scope */

function test(){
    let age = 20;
    console.log(age);
}
test();



/* Block Scope */
if(true){
    let city = "Hyderabad";
    console.log(city);
}




