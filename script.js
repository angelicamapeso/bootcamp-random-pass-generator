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
  //have an object criteria containing each criteria list

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
