// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
// Add event listener to generate button
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  var numbers = confirm("Do you want numbers in your password?");
  
  passwordText.value = password;

}

//Prompts that come up after you click generate password
function generatePassword(){
    var passwordLength = prompt("Please enter the number of characters you want for your new password. It must be at least 8 characters and no more than 128 characters.");
    var numbers = confirm("Do you want numbers in your password?");
    var lowerCases = confirm("Do you want lowercases in your password?");
    var upperCases = confirm("Do you want uppercases in your password?");
    var special = confirm("Do you want special characters in your password?");

    //the minimum count for numbers, lowerCases, upperCases & special Characters
    var minimumCount = 0;
}

//Empty minimums for numbers, lowerCases, upperCases, & specialCharacters

var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";

//Generator functions
//Uses methods to calculate what the variables for empty minimums will return.
var functionArray = {
    getNumbers: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
        return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
    },

};

/*Conditions to validate
user input & that at least one character type is selected*/

if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
}

if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
}

if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
}

if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
}

/*string variable for empty values for the loop
that creates the random characters needed to 
generate passwords*/

var randomPasswordGenerated = "";

//loop getting random characters
for (let i=0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
}


