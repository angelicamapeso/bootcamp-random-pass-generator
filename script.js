// Get a reference to the "Generate Password" button element
let generateBtn = document.getElementById('generate')
// Add a "click" event listener to the button that will display a new password
generateBtn.addEventListener('click', displayNewPassword)

/**
 * This `click` event handler function will generate a new password
 * and then display it as the value for the `#password` element
 * @returns {void} Nothing
 */
function displayNewPassword () {
  let criteria = getCriteria()
  let password = generatePassword(criteria)
  let passwordText = document.getElementById('password')
  passwordText.value = password
}

/* Your solution code goes here ... */

//object criteria needs to have:
// min-length, max-length
// lowercase
// uppercase
// numeric
// special characters

function getCriteria() {
  
  const userCriteria = {
    length: 8,
    lowercase: true,
    uppercase: false, 
    numeric: false, 
    specialCharacters: false,
  }

  let length = Number(prompt("How long would you like the password to be? (Must be a number from 8 to 128)"));
  while (Number.isNaN(length)
        || length % 1 !== 0
        || length < 8 
        || length > 128 ) {
    console.log("Invalid length: " + length);
    length = Number(prompt("Sorry, that is an invalid length. The length must be an integer from 8 to 128. How long would you like the password to be?"));
  }
  console.log("Valid length: " + length);
  //validate all responses
  //make sure input is lowercase
  //make sure input is a letter
  //make sure input matches one of the letters
    //see which index its at and that selects thing.?
  //one prompt, seperated by commas
    //remove all the white space and split by the comma
    //use their response as input to get the required criteria

  //return object criteria
}


function generatePassword(criteriaObject) {
  //go through each criteria Object
  //if it is active, push the criteria to the generating array

  //have the computer generate a random numnber for the length
  //have the computer generate random number n times to select an index in this huge array of possible characters/etc

  //return the password
}
