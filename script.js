// Assignment code here
var password = document.querySelector("#password");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var num = ["1", "2", "3", "4","5","6","7","8","9"];
var symbols = ["!", "@", "#", "$", "%","^","&","*"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var length;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

function generatePassword() {
  var passowrdoptions = [];

  while (length < 8 || length > 128) {
    length = prompt("How many characters in your password? Please choose between 8 and 128 characters.");

  }

  var hasnumber = confirm("Do you want numbers in your password? Ok for Yes, Cancel for No.");

  var gotlowercase = confirm("Do you want the letters in your password to be lowercase?");

  var hasuppercase = confirm("Do you want the letters in your password to be uppercase?");

  var hassymbols = confirm("Do you want symbols in your passowrd?");

  if (hasnumber === true) {
    passowrdoptions = passowrdoptions.concat(num)
  }
  


  if (gotlowercase === true) {
    passowrdoptions = passowrdoptions.concat(lowercase)
  }
 


  if (hasuppercase === true) {
    passowrdoptions = passowrdoptions.concat(uppercase)
  }



  if (hassymbols === true) {
    passowrdoptions = passowrdoptions.concat(symbols)
  }
  
  console.log(passowrdoptions);




  var password = "";


  //console.log(randomLetter);
  for (i = 0; i < length; i++) {
    var randonmNumber = Math.floor(Math.random() * passowrdoptions.length);
    var randomLetter = passowrdoptions[randonmNumber];
    console.log(randonmNumber);
    password += randomLetter;
  }
  return password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



