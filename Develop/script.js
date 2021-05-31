// Assignment code here
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword=() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
let characters = alpha;
incNumbers.checked ? (characters += numbers) : "";
incSymbols.checked ? (characters += symbols) : "";
passwordTxt.value = generatePassword(length.value, characters);
});