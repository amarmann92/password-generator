// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characters = ["q","t","e","a","l","z","A","B","C","H","T","Z","!","@","#","$","%","1","2","3","4","5","6"];
 var passwordlength = parseInt(prompt("how many characters for your password?"))
 var numbersreq = confirm("Do you need number in your password?")
 console.log(numbersreq)
  console.log(typeof passwordlength)

var final = []

  for (let i = -8; i < passwordlength; i++) {
    var x = Math.floor(Math.random()*characters.length)
    final.push(characters[x])
  }
  console.log(final)
  return(final.join(""))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
