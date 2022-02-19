// Assignment code here

/*
var randomCharacter = {
  upper: getRandomUpCase,
  lower: getRandomLowCase,
  number: getRandomNumber,
  special: getRandomSpecial,

}
// Random character selector
var getRandomLowCase = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97)
}

var getRandomUpCase = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65)
}

var getRandomNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48)
}

var getRandomSpecial = function() {
  var special = '!@#$%^&*()[]{}=+<>/,.';
  return special[Math.floor(Math.random() * special.length)];
}
*/

var numbers = [1,2,3,4,5,6,7,8,9,0];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var letters = Array.from(Array(26)).map( (_, i) => i + 97)

// Generate password function
var generatePassword = function(length, hasNumbers, hasLowercase, hasUppercase, hasSymbols) {
  // prompt user to specify password length
 var promptLength = window.prompt("Please specify a password length between 18 and 36 characters.");

 if (promptLength === "" || promptLength === null) {
  window.alert("You need to specify a length! Please try again.");
  return generatePassword();
  
}
 }

// console.log(string.fromCharCode(97));


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
