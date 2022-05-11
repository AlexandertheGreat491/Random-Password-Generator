// Arrays to define the characters used to generate passwords.


var password = "";

// The characters that can be used for upper case letters.
var characters = {
upperCaseLetters = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K","L","M", "N","O", "P", "Q", "R", "S","T", "U", "V", "W",  "X", "Y", "Z"],    
                         
//The characters that can be used for lower case characters.

lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",], 
                                           
// The characters that can be used for numeric characters.

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

specialCharacters = ["!", "#", "$", "%", "&", "=", ">", "<", "?", "[", "]", "{", "}", "~" , "_"]   
                        
};
// Get references to the #generate element.

var generateBtn = document.querySelector("#generate");


/* In each condition concat pw with
special characters, upperCaseLetters, lowerCaseLetters,
& numbers, so that when password is generated pw is the array
being pulled*/

// Function designed to generate random number between 8 128
var setPasswordLength = function() {
    var setPasswordLength = function(){
var passwordLength = Math.floor(Math.random() * 128) + 8;
return passwordLength;
    };
     
   // Function sets password characters. 

var setPasswordCharacters = function(){
  // user responds to prompt & character type is validated
  var alphabet, numbers, special;
  while (alphabet === undefined) {
    var promptCase = window.prompt("Would you like like your password to include upper case letters? Enter 'YES' or 'NO'");
  switch (promptCase.toLowerCase()) {
    case "yes":
      alphabet = characters.lowercase + characters.uppercase;
      break;
    case "no":
        alphabet = characters.lowercase;
        break;
    default:
      window.alert("Please provide a valid answer. Please try again.");
      break;
  }
  }
// while statement says what to do depending on how the user responds to the prompt
while (numbers === undefined) {
  var promptNumeric = window.prompt("Would you like your password to use numbers? Enter 'YES' or 'NO'");
  switch (promptNumeric.toLowerCase()) {
    case "yes":
      numbers = characters.numeric
      break;
    case "no":
        numbers = ""
        break;
    default:
          window.alert("Please provide a valid answer. Please try again.");
          break;
  }
}

//while statement that says what to do depending on how the user responds to the prompt

while (special === undefined) {
  var promptSpecial = window.prompt("Would you like your password to include special characters? Enter 'YES' or 'NO'");
  switch (promptSpecial.toLowerCase()) {
    case "yes":
      special = characters.special
      break;
    case "no":
      special = ""
      break;
    default:
      window.alert("Please provide a valid answer. Please try again.");
      break;
  }
}

// password characters are set based on prompt responses

password = alphabet + numbers + special;
return;

};



// querySelector used to return the first element that mataches #password.

var passwordText = document.querySelector("#password");
passwordText.value = password;
} else  {
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

// Write password to the #password input.

function writePassword() {
  var passwordCreteria = getInput();
  //console.log(passwordCreteria);
  //var passwordText = document.querySelector(passwordCreteria);
//console.log(password);
var passwordText = document.querySelector("#password");

//Math.random();

  passwordText.value = passwordCreteria;

}

// Event listener for generate button.

generateBtn.addEventListener("click", writePassword);