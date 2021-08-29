// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordEl = document.querySelector("#password");
var button = document.getElementById('generate');
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}',';','|','<','>','?']
var allPasswordOptions = [];
var password = [];
function generatePassword () {

 // let passwordOptions = generatePasswordOptions() 

  let resultNumChara = parseInt(prompt('How Many Character would you like to use between 8-128'));
   
  if (resultNumChara < 8) {
    alert('Password must contain at least 8 characters.');
    console.log("less than 8");
    return;
  };
  if (resultNumChara > 128) {
    alert('Password has a maximum of 128 characters');
    console.log("greater than 128");
    return;
  };

  
  if (Number.isNaN(resultNumChara) ){
    console.log(resultNumChara);
    alert('Use Numbers between 8-128');
    return;
  };
  

  let resultUpper = confirm('Would you like to use Uppercase letters?');
  if (resultUpper) {
    allPasswordOptions = allPasswordOptions.concat(upper);
    console.log(resultUpper);
  }

  let resultLower = confirm('Would you like to use Lowercase letters?');
  if (resultLower) {
    allPasswordOptions = allPasswordOptions.concat(lower);
    console.log(resultLower);
  }

  let resultSymbols = confirm('Would you like to use Symbols?');
  if (resultSymbols) {
    allPasswordOptions = allPasswordOptions.concat(symbols);
    console.log(resultSymbols);
  }

  let resultNumbers = confirm('Would you like to use numbers?');
  if (resultNumbers) {
    allPasswordOptions = allPasswordOptions.concat(numbers);
    console.log(resultNumbers);
    console.log(allPasswordOptions);
  }

  for (int i =0; i< resultNumChara; i++) {

  function getRandomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let passwordEl = Math.floor(step2) + min;
    return passwordEl;
  }
}
  console.log(allPasswordOptions);
  console.log(getRandomNumber(0, allPasswordOptions.length -1));
  randomNum = getRandomNumber(0, allPasswordOptions.length -1);
  randomElement = allPasswordOptions[randomNum];
  console.log(randomElement);


  return 'randomElement';

  generatePasswordOptions(allPasswordOptions)
}

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
