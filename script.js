// Assignment code here

//Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    ')',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

//Array of numeric characters to be included in password.
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

//Array of lowercase characters to be included in password.
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'y',
    'z',
];
// Function to that prompts the user to choose password options.
function getPasswordOptions() {
    // Prompts user to enter the length of their password.
    var length = parseInt(
        prompt('How many characters would you like your password to contain?')
    );

// Condition to check if the password length is a number.
if (isNaN(length) === true) {
   alert('Password length must be provided as a number.');
   return;
}

// Condition that checks if password is at least 8 characters in length.
if (length < 8) {
    alert('Password length must be at least 8 characters.');
    return;
}

// Condition that checks if the password length is less than 128 characters.
if (length > 128) {
    alert('Password length must be less than 129 characters.');
    return;
}

// Variable to store boolean regarding the use of special characters.
var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
);

// Variable to store boolean about the use of numeric characters.
var hasNumericCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
);

// Variable to store boolean regarding the inclusion of lowercase characters.
var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
);

// Variable to store boolean regarding the inclusion of uppercase characters.
var hasUpperCaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
);

// Condition to check if the user doesn't include any types of characters.
if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false 
) {
    alert('Must select at least one character type.');
    return;
}
// Objects that will store the user input.
var passwordOptions = {
    lenth: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLoweredCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
};
return passwordOptions;
}

// Function for getting a random element from an array.
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}

//Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    //Variable stores the password.
    var result = [];
}

// Array to store types of characters to include in password.
var possibleCharacters = [];

// Array to contain one of each type of chosen character to ensure each will be used.
var guaranteedCharacters = [];

// Conditional statement that adds array of special characters into array of possible characters based on user input.
if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
}

// Conditional statement that adds array of numeric characters into array of possible characters based on user input.
// Push new random special character to guaranteedCharacters.
if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

