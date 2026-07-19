
let surName: string = "Snehal";
let age: number = 20;
let isStudent: boolean = true;

console.log(surName);
console.log(age);
console.log(isStudent);


let numbers: number[] = [10,20,30,40];

console.log(numbers);
console.log(numbers[2]);


let student: [number, string] = [101,"Snehal"];

console.log(student);
 

enum Days2{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}

console.log(Days2.Wednesday);

function add10(a:number,b:number):number{
    return a+b;
}

console.log(add10(10,20));

const square=(num:number):number=>{
    return num*num;
}

console.log(square(5));

function greet0(name:string, city?:string){

    console.log(name);

    if(city){
        console.log(city);
    }

}

greet0("Snehal");
greet0("Snehal","Anantapur");

function greeting1(name:string="Guest"){

    console.log(name);

}

greeting1();
greeting1("Snehal");


let students={
    name:"Snehal",
    age:20
}

console.log(students.name);

type Student={
    name:string,
    age:number,
    cgpa:number
}

let s1:Student={
    name:"Snehal",
    age:20,
    cgpa:8.2
}

console.log(s1);

interface Employee{

    id:number;
    name:string;
    salary:number;

}

let emp:Employee={

    id:1,
    name:"Rahul",
    salary:50000

}

console.log(emp);

let id:number|string;

id=101;

id="EMP101";

console.log(id);

let value:any="Hello TypeScript";

let length1=(value as string).length;

console.log(length1);


class Student2{

    name:string;
    age:number;

    constructor(name:string,age:number){

        this.name=name;
        this.age=age;

    }

    display(){

        console.log(this.name);
        console.log(this.age);

    }

}

let s=new Student2("Snehal",20);

s.display();

class Animal{

    eat(){

        console.log("Eating");

    }

}

class Dog extends Animal{

    bark(){

        console.log("Barking");

    }

}

let d=new Dog();

d.eat();

d.bark();

class Employee1 {

    public name: string;
    private salary: number;
    protected id: number;

    constructor(name: string, salary: number, id: number) {
        this.name = name;
        this.salary = salary;
        this.id = id;
    }
}

abstract class Shape{

    abstract area():number;

}

class Circle extends Shape{

    radius:number=5;

    area(){

        return 3.14*this.radius*this.radius;

    }

}

let c=new Circle();

console.log(c.area());


function displays<T>(value:T){

    return value;

}

console.log(displays<number>(10));

console.log(displays<string>("Snehal"));


interface Data<T>{

    value:T;

}

let d1:Data<string>={

    value:"Hello"

}

console.log(d1);


class Box<T>{

    value:T;

    constructor(value:T){

        this.value=value;

    }

}

let b=new Box<number>(100);

console.log(b.value);


async function fetchDataz(){

    return "Data Received";

}

fetchDataz().then(result=>console.log(result));

let promise=new Promise<string>((resolve,reject)=>{

    resolve("Success");

});

promise.then(result=>console.log(result));

