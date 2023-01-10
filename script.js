// Assignment code here
var password = document.querySelector("#password");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var chars = "#abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*";
var selectCharacter = "8,9,10,11,12,13,14,15";
var length = 10;

prompt("How many characters in your password? Please choose between 8 and 128 characters.");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

function generatePassword(){
  
  var password = "";
 
  
  //console.log(randomLetter);
  for( i = 0; i < length; i++){
    var randonmNumber = Math.floor(Math.random()*chars.length);
    var randomLetter = chars[randonmNumber];
    console.log(randonmNumber);
    password += randomLetter;
  }
  return password;
}

generatePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();

