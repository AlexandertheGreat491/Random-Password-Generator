// Arrays to define the characters used to generate passwords.
// Array that defines characters that can be used for upper case letters.

var upperCaseLetters = ["A", 
                        "B", 
                        "C", 
                        "D", 
                        "E", 
                        "F", 
                        "G", 
                        "H", 
                        "I", 
                        "J", 
                        "K", 
                        "L", 
                        "M", 
                        "N", 
                        "O", 
                        "P", 
                        "Q", 
                        "R", 
                        "S", 
                        "T", 
                        "U", 
                        "V", 
                        "W", 
                        "X", 
                        "Y", 
                        "Z",];

// Array that defines the characters that can be used for lower case characters.

var lowerCaseLetters = ["a", 
                        "b", 
                        "c", 
                        "d", 
                        "e", 
                        "f", 
                        "g", 
                        "h", 
                        "i", 
                        "j", 
                        "k", 
                        "l", 
                        "m", 
                        "n", 
                        "o", 
                        "p", 
                        "q", 
                        "r", 
                        "s", 
                        "t", 
                        "u", 
                        "v", 
                        "w", 
                        "x", 
                        "y", 
                        "z"];

// Array that defines the characters that can be used for numeric characters.

var numbers = [0, 
               1, 
               2, 
               3, 
               4, 
               5, 
               6, 
               7, 
               8, 
               9];

 // Array that defines the characters that can be used for numeric characters.

var specialCharacters = ["!", 
                         "@", 
                         "#", 
                         "$", 
                         "%", 
                         "&", 
                         "=", 
                         ">", 
                         "<", 
                         "?", 
                         "[", 
                         "]", 
                         "{", 
                         "}", 
                         "~", 
                         "_",];

 /* Var pw will concat to the above arrays
 causing the random characters in the password
 to be pulled from pw. */

var pw = [];
var password = "";

// Get references to the #generate element.
// Returns the first element that matches #generate element

var generateBtn = document.querySelector("#generate");

// Defining the getInput() and variables.

/* In each condition concat pw with
special characters, upperCaseLetters, lowerCaseLetters,
& numbers, so that when password is generated pw is the array
being pulled*/

function getInput() {

// parseInt() decomposes a string argument and returns characters.
// prompt() used to ask the user to select the number of characters in their password.

    var length = parseInt(prompt("Enter number of characters desired between 8 and 128"),10);

/* The condition sets the length of the password to at least
8 charcters & not more than 128. When true the user begins to choose
the characters used in their password */

    if ((length >= 8) && (length <= 128)) {
        var characters = confirm("Would you like to include special characters?");

/* pw array concat with the specialCharacters array to enable
the user to pull random special characters from the same array.*/

        if (characters == true) {
            pw=pw.concat(specialCharacters);
            minimumSpecialCharacters = utility.getRandomspecialCharacters();
            minimumCount++;
        }
        var numbers = confirm("Would you like to include numbers?");

/* pw array concat with the numbers array to allow the password generator to pull
 random numerical characters from the same array*/

      if (numbers == true) {
          pw=pw.concat(numbers);
        minimumNumbers = utility.getRandomNumber();
        minimumCount++;
    } 
    var uppercaseletters = confirm("Would you like to include uppercase letters?");

/* pw array concat with the upperCaseLetters array to allow the password generator to pull random uppercase letter
characters from the same array*/

    if (uppercaseletters == true) {
        pw=pw.concat(upperCaseLetters);
      minimumUpperCases = utility.getRandomUpper();
      minimumCount++;
    } 
    var lowercaseletters = confirm("Would you like to include lowercase letters?");

/* pw array concat with the lowerCaseLetters array to allow the password generator
to pull from the same array */

    if (lowercaseletters == true) {
        pw=pw.concat(lowerCaseLetters);
      minimumLowerCases = utility.getRandomLower();
      minimumCount++;
    }
    for (let i = 0; i < length ; i++) {
      var randomNumberPicked = Math.floor(Math.random() * pw.length);
     password += pw[randomNumberPicked];
     console.log(password);
}

// querySelector used to return the first element that mataches #password.

var passwordText = document.querySelector("#password");
passwordText.value = password;
} else {
    alert("Invalid response. Must be a number between 8 and 128.");
  }

return password;

// getInput() ends & return statement specifies that password must be returned.
}

//Defining empty variables.

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

  var utility = {
// String.fromCharCode method returns a string.
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

// Write password to the #password.

function writePassword() {
  var passwordCreteria = getInput();
  //console.log(passwordCreteria);
  //var passwordText = document.querySelector(passwordCreteria);
//console.log(password);
var passwordText = document.querySelector("#password");

//Math.random();

  passwordText.value = passwordCreteria;

}

/* Event listener for generate button that affects
how the "Generate" button functions when the user clicks on the button.*/

generateBtn.addEventListener("click", writePassword);