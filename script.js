// Assignment code here

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

function generatePassword(){

  
  var tempPassword = '';

  // prompts in regards to passwords  decisions 
  var passwordLength = prompt("Please enter the number of characters you want for you new password. It must be at least 8 characters, no longer than 128 characters");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerChar = confirm("Do you want lowercases in your password?");

  var upperChar = confirm("Do you want uppercases in your password?");

  var specialChar = confirm("Do you want special characters in your password?");

  var minCount = 8;

  if (numbers === true) {

  }

  if (lowerChar === true) {

  }

  if (upperChar === true) {

  }

  if (specialChar === true) {

  }

  return tempPassword;
};