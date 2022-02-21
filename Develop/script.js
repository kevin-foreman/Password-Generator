// Assignment Code here

// Password parameters
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var letters = Array.from(Array(26)).map( (_, i) => i + 97);
var lowCaseLetters = letters.map(code => String.fromCharCode(code));
var upCaseLetters = lowCaseLetters.map(letter => letter.toUpperCase())

// Generate function
var generatePassword = function(password, passwordArray) {

  var password = "";
  var passwordArray = "";
  // Prompt user to set password length
  while (true) {
    var passwordLength = parseInt(prompt("Set the length of your password between 18 and 36 characters"));
    // If user sets a correct length do nothing and move on to the next parameter
    if (passwordLength >= 18 && passwordLength <= 36) {
      break;
    }
    // If user sets an incorrect length
    alert("Please select a number between 18 - 36");
  }
  // Once user has chosen a valid number, they will choose the rest of the parameters
  var specials_choice = confirm("Select 'OK' if you would like to include special characters");
  var numbers_choice = confirm("Select 'OK' if you would like to include numbers");
  var upCaseLetters_choice = confirm("Select 'OK' if you would like to include uppercase letters");
  var lowCaseLetters_choice = confirm("Select 'OK' if you would like to include lowercase letters");
  
    
  // Function to concat all possible true options and pass them to the password variable
var passwordArray = []
if (specials_choice) {
  passwordArray = passwordArray.concat(specials)
}  
if (numbers_choice) {
  passwordArray = passwordArray.concat(numbers)
}  
if (upCaseLetters_choice) { 
  passwordArray = passwordArray.concat(upCaseLetters)
}  
if (lowCaseLetters_choice) { 
  passwordArray = passwordArray.concat(lowCaseLetters)
} 


// Loop to assign random characters  
while (password.length < passwordLength) {
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)];

      // validate if the user made no selections for the parameters
      if (specials_choice === false && numbers_choice === false && upCaseLetters_choice === false && lowCaseLetters_choice === false) {
        alert("You need to I select at least one parameter. Please try again.")
      };         
}
    
  
    return password;
};


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