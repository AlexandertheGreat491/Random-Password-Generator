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
}
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

