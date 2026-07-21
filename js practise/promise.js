let promise= new Promise((resolve,reject)=>{
    let age=18;
    if(age>=18){
        resolve("you are major");
    }else{
        reject("you are minor")
    }
});
promise.then(result=>{console.log(result);})
/*timeout*/
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("time out example")
    },3000);

});
promise1.then(result=>{console.log(result);})
/*catch if promise fails or reject then we use catch*/
let promise2= new Promise((resolve,reject)=>{
    const temp=5;
    if(temp<5){
        resolve("temp is greater");
    }
    reject("temp is smaller")
})
promise2.then(result=>{console.log(result);})
.catch(error=>{console.log(error)})

let promise3=new Promise((resolve,reject)=>{
    for(i=0;i<=3;i++){
        console.log(i);
    }
    reject("when .catch is called");
});
promise3.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
/*finally*/
promise4= new Promise((resolve,reject)=>{
    resolve("finally example");
});
promise4.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("executes def");
});
/*promise chaining*/
promise5= new Promise((resolve,reject)=>{
    resolve(10);
})
promise5.then(num=>num*3)
.then(num=>num/5)
.then(result=>{
    console.log(result)
});
/*async*/
async function play() {
    return "async example";
}
play().then(result=>{
    console.log(result);
})
/*await*/
function example(){
    return new Promise(resolve =>{ 
        setTimeout(()=>{ 
        resolve("example on await");
    },2000);
  });
}
async function display() {
    let result= await example();
    console.log(result);
}
display();
/*mutliple async*/
function m1(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("function 1");
        },1000);
    })
}
function m2(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("function 2");
        },1000);
    })
}
async function multipleDisplay() {
    let result1=await m1();
    console.log(result1);
    let result2=await m2();
    console.log(result2); 
}
multipleDisplay();
/*try catch in async*/
function checkAge(age1){
    return new Promise((resolve,reject)=>{
        if(age1>=18){
            resolve("eligible");
        }
        else{
            reject("not eligible");
        }
    });
}
async function check() {
    try{
        let result= await checkAge(19);
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }
    
}
check();
/*promise all*/
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");

Promise.all([p1, p2])
    .then(result => console.log(result));
Promise.race([p1, p2]).then(result => console.log(result));
/*throw with try catch*/
async function drag() {
    throw new Error("it is a new error");
}
drag().catch(error=>console.log(error.message));
/*api*/
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
getUsers();

const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.reject("Error");

// Promise.all()
Promise.all([p1, p2])
  .then(result => console.log("all:", result));

// Promise.allSettled()
Promise.allSettled([p1, p3])
  .then(result => console.log("allSettled:", result));

// Promise.any()
Promise.any([p3, p2])
  .then(result => console.log("any:", result));

// Promise.race()
Promise.race([
  new Promise(resolve => setTimeout(() => resolve("First"), 1000)),
  new Promise(resolve => setTimeout(() => resolve("Second"), 2000))
]).then(result => console.log("race:", result));

// Promise.resolve()
Promise.resolve("Hello")
  .then(result => console.log("resolve:", result));

// Promise.reject()
Promise.reject("Something went wrong")
  .catch(err => console.log("reject:", err));