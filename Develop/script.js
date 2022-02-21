// Assignment Code here

// Password parameters
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var letters = Array.from(Array(26)).map( (_, i) => i + 97);
var lowCaseLetters = letters.map(code => String.fromCharCode(code));
var upCaseLetters = lowCaseLetters.map(letter => letter.toUpperCase())

// Generate function
var generatePassword = function(password, passwordParameters) {

  var password = "";
  var passwordArray = "";
  // Prompt user to set password length
  while (true) {
    passwordLength = parseInt(prompt("Set the length of your password between 18 and 36 characters"));
    // If user sets a correct length do nothing and move on to the next parameter
    if (passwordLength >= 18 && passwordLength <= 36) {
      break;
    }
    // If user sets an incorrect length
    alert("Please select a number between 18 - 36");
  }
  // Once user has chosen a valid number, they will choose the rest of the parameters
  specials = confirm("Select 'OK' if you would like to include special characters");
  numbers = confirm("Select 'OK' if you would like to include numbers");
  upCaseLetters = confirm("Select 'OK' if you would like to include uppercase letters");
  lowCaseLetters = confirm("Select 'OK' if you would like to include lowercase letters");
  if (confirm.specials, numbers, upCaseLetters, lowCaseLetters === '' || confirm.specials, numbers, upCaseLetters, lowCaseLetters === null) {
      alert("You must select at least one parameter, please try again.");
      return generatePassword;
  }

  // Function to concat all possible true options and pass them to the password variable
var passwordArray = []
if (specials) 
  passwordArray.concat(specials)
if (numbers) 
  passwordArray.concat(numbers)
if (upCaseLetters) 
  passwordArray.concat(upCaseLetters)
if (lowCaseLetters) 
  passwordArray.concat(lowCaseLetters)
    // else alert("You must select at least one parameter, please try again.")

    // For loop to select random characters from the parameters
    
    // for (var i = 0; i < passwordLength; i++) {
      // password += passwordParameters[Math.floor(Math.random() * passwordParameters.length)]
    // }

    while (password.length < passwordLength) {
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
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