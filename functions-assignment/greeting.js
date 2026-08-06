const greet=(name)=> {
  return "Hello, " + name + "!";
}
const displayMessage=(callback, name)=> {
  console.log(callback(name));
}
displayMessage(greet, "Snehal");
