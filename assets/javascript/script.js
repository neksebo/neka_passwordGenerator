// Assignment code here
function generatePassword() {
  var passwordLength = prompt("length of password 8-128");
  var criteria = []; 
  var mypassword = [];
console.log (passwordLength);
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ){
  alert ("try again enter a length between 8 and 128 characters");
} else {
  var lowercase = confirm ("do you want lowercase characters?");
  var upercase = confirm ("do you want upercase characters?");
  var numeric = confirm ("do you want numeric characters?");
  var specialCharacters = confirm ("do you want specialCharacters characters?");
}
collectcriteria();

function numberGenerator () {
  return Math.floor (Math.random() *10);
}
function leterGenerator () {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[ Math.floor (Math.random() * letters.length)];
}
function specialCharacterGenerator () {
  var symbols = [ "\\", "!", '\"', "#", "$", "%", "&", "\'","(",")", "*", "+" , "," , "-", "." , "/",":",";","<", "=",">", "?", "@", "[","]" ,"^", "_", "`", "{", "|", "}", "~"];
  return symbols[ Math.floor (Math.random() * symbols.length)];
}
function collectcriteria () {
  if (lowercase) {
    criteria.push ("lowercase");
  }
  if (upercase) {
    criteria.push ("uppercase");
  }
  if (numeric) {
    criteria.push ("numeric");
  }
  if (specialCharacters) {
    criteria.push ("specialCharacters");
  }
}
for (var i = 0; i < passwordLength; i++ ) {
  var currentCriteria = criteria[Math.floor (Math.random() * criteria.length)];
  if (currentCriteria === "lowercase") {
    mypassword.push (leterGenerator());
  }
  if (currentCriteria === "uppercase") {
    mypassword.push (leterGenerator().toUpperCase());
}
if (currentCriteria === "numeric") {
  mypassword.push (numberGenerator());
}
if (currentCriteria === "specialCharacters") {
  mypassword.push (specialCharacterGenerator());
}
}
return mypassword.join('');
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
