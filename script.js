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

  passwordText.value = password;

}

//Prompts that come up after you click generate password
function generatePassword(){
    
}
