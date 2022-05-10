var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "=", ">", "<", "?", "[", "]", "{", "}", "~", "_",];
var pw = [];
var password = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Defining the getInput() and variables.
/* In each condition concat pw with
special characters, upperCaseLetters, lowerCaseLetters,
& numbers, so that when password is generated pw is the array
being pulled*/
function getInput() {
    var length = parseInt(prompt("Enter number of characters desired between 8 and 128"),10);
    if ((length >= 8) && (length <= 128)) {
        var characters = confirm("Would you like to include special characters?");
        if (characters == true) {
            pw=pw.concat(specialCharacters);
            minimumSpecialCharacters = functionArray.getRandomspecialCharacters();
            minimumCount++;
        }
        var numbers = confirm("Would you like to include numbers?");
      if (numbers == true) {
          pw=pw.concat(numbers);
        minimumNumbers = functionArray.getRandomNumber();
        minimumCount++;
    } 
    var uppercaseletters = confirm("Would you like to include uppercase letters?");
    if (uppercaseletters == true) {
        pw=pw.concat(upperCaseLetters);
      minimumUpperCases = functionArray.getRandomUpper();
      minimumCount++;
    } 
    var lowercaseletters = confirm("Would you like to include lowercase letters?");
    if (lowercaseletters == true) {
        pw=pw.concat(lowerCaseLetters);
      minimumLowerCases = functionArray.getRandomLower();
      minimumCount++;
    }
    
    for (let i = 0; i < length ; i++) {
      var randomNumberPicked = Math.floor(Math.random() * pw.length);
     password += pw[randomNumberPicked];
     console.log(password);
}
var passwordText = document.querySelector("#password");
passwordText.value = password;
} else {
    alert("Invalid response. Must be a number between 8 and 128.");
  }
return password;
}

//Defining empty variables
var minimumCount = 0;
var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";
password += minimumNumbers;
password += minimumLowerCases;
password += minimumUpperCases;
password += minimumSpecialCharacters;
// Function that defines the inputs from generatePassword().
function generatePassword() {
    var options = getInput();
  }
  var functionArray = {
    getRandomNumber: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getRandomLower: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getRandomUpper: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getRandomspecialCharacters: function() {
      const specialCharacters = '!@#$%^&*(){}[]=<>/,.';
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }
// Write password to the #password input

function writePassword() {
  var passwordCreteria = getInput();
  //console.log(passwordCreteria);
  //var passwordText = document.querySelector(passwordCreteria);
//console.log(password);
var passwordText = document.querySelector("#password");

//Math.random();

  passwordText.value = passwordCreteria;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);