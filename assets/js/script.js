// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Declarations
var setLength = "";
var addLower;
var addUpper;
var addNumber;
var addSpecialChar;

console.log(addLower);

// Generate password criteria
function generatePassword(){
  var setLength = prompt("How many characters long would you like your password to be? Pick a number between 8-128.");

  while(setLength <= 7 || setLength >= 129){
    alert("Password length must be 8-128 characters. Try again.");
    var setLength = prompt("How many characters long would you like your password to be? Pick a number between 8-128.");
  }

  alert("Your password will contain " + setLength + " characters.");

  alert("Next you will be prompted to add lowercase letters, uppercase letters, numbers, or special characters to your password. You can choose as many as you want, but you must add at least one.");

  var addLower = confirm("Click OK to include lowercase letters in your password.");
  var addUpper = confirm("Click OK to include uppercase letters in your password.");  
  var addNumber = confirm("Click OK to include numbers in your password.");  
  var addSpecialChar = confirm("Click OK to include special characters in your password.");  

  while(addLower === false && addUpper === false && addNumber === false && addSpecialChar === false){
    alert("Password must contain at least one parameter. Try again.");
    var addLower = confirm("Click OK to include lowercase letters in your password.");
    var addUpper = confirm("Click OK to include uppercase letters in your password.");  
    var addNumber = confirm("Click OK to include numbers in your password.");  
    var addSpecialChar = confirm("Click OK to include special characters in your password.");  
  }

  alert("Your password will contain " + setLength + " characters. You selected the following parameters to be included - lowercase letters: " + addLower + ", uppercase letters: " + addUpper + ", numbers: " + addNumber + ", special characters: " + addSpecialChar + ".");

  var passChar = [];

  if (addLower){
  passChar = passChar.concat(lower);
  }
  if (addUpper){
  passChar = passChar.concat(upper);
  }
  if (addNumber){
  passChar = passChar.concat(number);
  }
  if (addSpecialChar){
  passChar = passChar.concat(specialChar);
  }

  console.log(passChar);

  var randomPass = "";

  for (var i=0; i < setLength; i++){
  randomPass = randomPass + passChar[Math.floor(Math.random() * passChar.length)];
  console.log(randomPass)
  }
  return randomPass;
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
