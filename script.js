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

// Variable for characters used to generate random password 
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialNum = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '?', '/', '<', '>'];


// generate password function 
function generatePassword(){

  //temp password function
  var tempPassword = [];

  // prompts in regards to passwords  decisions 
  var passLength = parseInt(prompt("How many characters would you like your password to be? Please pick between 8 and 128 characters."));
  if(passLength < 8 || passLength > 128) {
    alert('Please select the min or max amount required');
    return;
  }

  var numbers = confirm("Do you want numbers in your password?");

  var lowerChar = confirm("Do you want lowercases in your password?");

  var upperChar = confirm("Do you want uppercases in your password?");

  var specialChar = confirm("Do you want special characters in your password?");

  var userType = [];
  var gurantee = [];


  // conditonal statements in regards to prompts 
  if (numbers === true) {
    userType = userType.concat(number);
   gurantee.push(getRandomInt(number))
    
  }

  if (lowerChar === true) {
    userType = userType.concat(lowerCase);
    // console.log(b)
    gurantee.push(getRandomInt(lowerCase));

  }

  if (upperChar === true) {
    userType = userType.concat(upperCase);
    gurantee.push(getRandomInt(upperCase));
    
  }

  if (specialChar === true) {
    userType = userType.concat(specialNum)
    gurantee.push(getRandomInt(specialNum))

  }

for (let i = 0; i < passLength; i++) {
   let rand = getRandomInt(userType);
    tempPassword.push(rand)
};

for (let i = 0; i < gurantee.length; i++) {
  tempPassword[i] = gurantee[i]
  
};

  // generates password
  return tempPassword.join('')
};


  function getRandomInt(arr) {
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];
  }
