const getData = (uId, callback) => {
  setTimeout(() => {
    console.log(`Fetched the data for user: ${uId}`);
    callback("skc@gmail.com");
  }, 4000);
};

console.log("Start");
getData("skc", (email) => {
  console.log("Email id of the user is: " + email);
});
console.log("End");