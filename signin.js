var database = [
  {
    username: "John",
    password: "password"
  }
];

var userPrompt = prompt("What is your username?");
var passPrompt = prompt("What is your password?"); 


function signin(user, pass) {
if (user === database[0].username && pass === database[0].password) {
  console.log("Welcome to our website");
} else {
  alert("You are not allowed to enter");
}
}

signin(userPrompt, passPrompt);
