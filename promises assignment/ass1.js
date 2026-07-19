function getData(uId, callback) {
    setTimeout(() => {
        console.log("Fetched the data!");
        callback("skc@gmail.com");
    }, 4000);
}
console.log("Start");
getData("skc", function(email) {
    console.log("Email id of the user is: " + email);
});

console.log("End");
