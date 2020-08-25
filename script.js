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

function getCriteria() {
  
  const userCriteria = {
    length: 8,
    characterTypes: ['L'],
  }

  userCriteria.length = askPasswordLength();
  //console.log(userCriteria.length);

  userCriteria.characterTypes = askCharacterTypes();
  //console.log(userCriteria.characterTypes);

}

function askCharacterTypes() {
  let characterTypes = prompt("Type a comma-seperated list of the character types you wish to include in the password: \n - lowercase (L) \n - uppercase (U) \n - numberic (N) \n - special characters (S)").toUpperCase().replace(/\s+/g, "").split(",");

  while (!areCharactersValid(characterTypes)) {
    //console.log("Non-valid input: " + characterTypes);
    characterTypes = prompt("Sorry, that wasn't a valid answer. Type a comma-seperated list of the character types you wish to include in the password: \n - lowercase (L) \n - uppercase (U) \n - numberic (N) \n - special characters (S)").toUpperCase().replace(/\s+/g, "").split(",");
  }
  //console.log("Valid input: " + characterTypes);

  return characterTypes;
}

function areCharactersValid(characterTypes) {
  if (characterTypes.length === 0) {
    return false;
  }
  for (let i = 0; i < characterTypes.length; i ++) {
    if (characterTypes[i].length > 1 
      || (characterTypes[i] !== "L"
      && characterTypes[i] !== "U"
      && characterTypes[i] !== "N"
      && characterTypes[i] !== "S")) {
        return false;
      }
  }
  return true;
}

function askPasswordLength() {
  let length = Number(prompt("How long would you like the password to be? (Must be a number from 8 to 128)"));
  while (!isPasswordLengthValid(length)) {
    //console.log("Invalid length: " + length);
    length = Number(prompt(`Sorry, ${length} is an invalid length.` + '\n The length must be: \n - An integer \n - At minimum, 8 \n - At maximum, 128 \nHow long would you like the password to be?'));
  }
  //console.log("Valid length: " + length);
  return length;
}

function isPasswordLengthValid(length) {
  const validCondition = (!Number.isNaN(length)
    && length % 1 === 0
    && length >= 8 
    && length <= 128); 
  return validCondition;
}

function generatePassword(criteriaObject) {
  //go through each criteria Object
  //if it is active, push the criteria to the generating array

  //have the computer generate a random numnber for the length
  //have the computer generate random number n times to select an index in this huge array of possible characters/etc

  //return the password
}
