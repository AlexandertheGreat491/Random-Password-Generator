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
    
}
