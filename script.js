

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

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialNum = ['!', '@', '#']

function generatePassword(){

  var tempPassword = [];

  // prompts in regards to passwords  decisions 
  var passLength = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8-128 characters. How many characters would you like your password to be?"));
  
  var numbers = confirm("Do you want numbers in your password?");

  var lowerChar = confirm("Do you want lowercases in your password?");

  var upperChar = confirm("Do you want uppercases in your password?");

  var specialChar = confirm("Do you want special characters in your password?");


  var numberHolder = []
  var lowerCharHolder = []
  var upperCharHolder = []
  var specialCharHolder = []

  // conditonal statements
  if (numbers === true) {
    
  }

  if (lowerChar === true) {

  }

  if (upperChar === true) {

  }

  if (specialChar === true) {

  }


  for (var i = 0; i < passLength; i++) {
    tempPassword.push()
  }


  console.log(getNum());
  console.log(getLowerChar());
  console.log(getUpperChar());
  console.log(getSpecialNum());

  return String.toString(tempPassword)
};


 
// Change
  function getNum() {
    return getRandomInt(number.length)
  };

  function getLowerChar() {
    var holder = getRandomInt(lowerCase.length)
    return lowerCase[holder]
  };

  function getUpperChar() {
    var holder = getRandomInt(lowerCase.length)
    var upperValue = lowerCase[holder];
    return upperValue.toUpperCase(); 
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //Gets random char from an array
  function getSpecialNum() {
    var holder = getRandomInt(specialNum.length);
    return specialNum[holder]
  }