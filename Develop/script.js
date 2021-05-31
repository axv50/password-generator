// Assignment code here
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordTxt = document.querySelector("#password");
var length = document.querySelector("#length");
var incNumbers = document.querySelector("#numbers");
var incSymbols = document.querySelector.("#symbols");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };



}

// Add event listener to generate button
generateBtn.addEventListener("click", function writePassword);
let characters = alpha;
incNumbers.checked ? (characters += numbers) : "";
incSymbols.checked ? (characters += symbols) : "";
passwordTxt.value = generatePassword(length.value, characters);
});