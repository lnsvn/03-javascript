// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// arrays
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// variable declarations
var setLength = "";
var addLower;
var addUpper;
var addNumber;
var addSpecialChar;

// generates password with criteria
function generatePassword(){

  //prompt for length
  var setLength = prompt("How many characters long would you like your password to be? Pick a number between 8-128.");

  // checks with password length parameters
  // loop
  while(setLength <= 7 || setLength >= 129){

    // adds alert that selection was not in parameters
    alert("Password length must be 8-128 characters. Try again.");
    // re-prompt
    var setLength = prompt("How many characters long would you like your password to be? Pick a number between 8-128.");
  }

  // adds alert to inform of selection
  alert("Your password will contain " + setLength + " characters.");

  // adds alert to give instruction
  alert("Next you will be prompted to add lowercase letters, uppercase letters, numbers, or special characters to your password. You can choose as many as you want, but you must add at least one.");

  // prompts to confirm or deny criteria
  var addLower = confirm("Click OK to include lowercase letters in your password.");
  var addUpper = confirm("Click OK to include uppercase letters in your password.");  
  var addNumber = confirm("Click OK to include numbers in your password.");  
  var addSpecialChar = confirm("Click OK to include special characters in your password.");  

  // checks with password character types parameters
  // loop
  while(addLower === false && addUpper === false && addNumber === false && addSpecialChar === false){

    // adds alert that selections were not in parameters
    alert("Password must contain at least one parameter. Try again.");

    // re-prompts to confirm or deny
    var addLower = confirm("Click OK to include lowercase letters in your password.");
    var addUpper = confirm("Click OK to include uppercase letters in your password.");  
    var addNumber = confirm("Click OK to include numbers in your password.");  
    var addSpecialChar = confirm("Click OK to include special characters in your password.");  
  }

  // adds alert to inform of selections
  alert("Your password will contain " + setLength + " characters. You selected the following parameters to be included - lowercase letters: " + addLower + ", uppercase letters: " + addUpper + ", numbers: " + addNumber + ", special characters: " + addSpecialChar + ".");

  var passChar = [];

  // applies selections
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

  // creates empty string that loop below will fill
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
