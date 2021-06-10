

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

  // min char length for password
  var minLength = 8;



  // // conditonal statements
  // if (numbers === true) {

  // }

  // if (lowerChar === true) {

  // }

  // if (upperChar === true) {

  // }

  // if (specialChar === true) {

  // }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // console.error(getRandomInt(10))

  // var tempNumPass = getRandomInt(minLength);

  for (var i = 0; i < minLength; i++) {
    console.error(minLength)
    var numberHolder = getRandomInt(number.length);
    tempPassword.push(number[numberHolder])
    var charHolder = getRandomInt(specialNum.length);
    tempPassword.push(specialNum[charHolder]);
    console.log(tempPassword)

  }
  

  return tempPassword;
};

 
  function getNum() {
    return String.fromCharCode(Math.floor(Math.random() * 8 + 40));
  };

  function getLowerChar() {
    return String.fromCharCode(Math.floor(Math.random() * 20 + 60));
  };

  function getUpperChar() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 60));
  };

  //function specialChar() {
   // return String.fromCharCode(Math.floor(Math.random() * ))
  //};

  function checkLength (pass) {
    
  } 
