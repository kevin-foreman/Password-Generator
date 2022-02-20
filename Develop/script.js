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
var letters = Array.from(Array(26)).map( (_, i) => i + 97);
var LowCaseLetters = letters.map(code => String.fromCharCode(code));
var UpCaseLetters = LowCaseLetters.map(letter => letter.toUpperCase())

// Generate password function
var generatePassword = function(length, hasNumbers, hasLowercase, hasUppercase, hasSymbols) {
  // prompt user to specify password length
 var promptLength = window.prompt("Please specify a password length between 18 and 36 characters. This password generator will prioritize length over complexity, so if you select only one character parameter your password will not be the strongest it can be.");

 // function isLetter(str) {
   // return str.length === 1 && str.match(/[a-z]/i);
 // }

 if (promptLength === "" || promptLength === null) {
  window.alert("You need to specify a length! Please try again.");
  return generatePassword();
 }

 if (promptLength < 17 || promptLength > 35) {
   window.alert("You need to specify a length within the range. Please try again.");
   return generatePassword();
 }

 if (promptLength === ) {
   window.alert("You need to specify a number between 18 and 36. Please try again");
   return generatePassword();
 }

  // prompt user to specify upper case letters or not
 var promptUpper = window.prompt("Do you want to include upper case letters? 1 for yes, 2 for no.");
 
 if (promptUpper === "" || promptUpper === null) {
  window.alert("You need to decide! Please try again.");
  return generatePassword();
 }

  // prompt user to specify lower case letters or not
  var promptLower = window.prompt("Do you want to include lower case letters? 1 for yes, 2 for no.");
 
  if (promptLower === "" || promptLower === null) {
   window.alert("You need to decide! Please try again.");
   return generatePassword();
  }

  // prompt user to specify numbers or not
  var promptNumbers = window.prompt("Do you want to include numbers? 1 for yes, 2 for no.");
 
 if (promptNumbers === "" || promptNumbers === null) {
  window.alert("You need to decide! Please try again.");
  return generatePassword();
 }
  
  // prompt user to specify special characters or not
  var promptSpecial = window.prompt("Do you want to include special characters or not? 1 for yes, 2 for no.");
 
 if (promptSpecial === "" || promptSpecial === null) {
  window.alert("You need to decide! Please try again.");
  return generatePassword();
 }
};

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
