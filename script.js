// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordEl = document.querySelector("#password");
var button = document.getElementById('generate');
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['1','2','3','4','5','6','7','8','9','0']
var symbols = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}','\','|','<','>','?']
button.onclick = function () {

let resultNumChara = prompt('How Many Character would you like to use between 8-128');
  if (resultNumChara <8){alert('Password must contain at least 8 characters.')return};  
  if (resultNumChara >128){alert('Password has a maximum of 128 characters')return};
  if (resultNumChara='numbers'){alert('Use Numbers between 8-128')return}

let resultUpper = confirm('Would you like to use Uppercase letters?');
if (resultUpper) {

console.log(resultUpper);
}

let resultLower = confirm('Would you like to use Lowercase letters?');
if (resultLower) {
  //add lowercase letters
console.log(resultLower);
}

let resultSymbols = confirm('Would you like to use Symbols?');
if (resultSymbols) {
  //add symbols
console.log(resultSymbols);
}

let resultNumbers = confirm('Would you like to use numbers?');
if (resultNumbers) {
  //add numbers 0-9
  console.log(resultNumbers);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
