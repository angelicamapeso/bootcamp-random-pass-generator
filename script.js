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
  let passwordText = document.getElementById('password')
  try {
  let criteria = getCriteria()
  let password = generatePassword(criteria)
  passwordText.value = password
  }
  catch(err) {
    passwordText.value = err;
  }
}

/* Your solution code goes here ... */

function getCriteria() {
  
  const userCriteria = {
    length: 8,
    includeLowercase: true,
    includeUppercase: false,
    includeNumbers: false,
    includeSpecialChar: false,
  }

  userCriteria.length = askPasswordLength();
  //console.log(userCriteria.length);

  do {
    userCriteria.includeLowercase = confirm("Would you like to include lowercase characters in your password?");

    userCriteria.includeUppercase = confirm("Would you like to include uppercase characters in your password?");

    userCriteria.includeNumbers = confirm("Would you like to include numbers in your password?");

    userCriteria.includeSpecialChar = confirm("Would you like to include special characters in your password?");
    
    //console.log(userCriteria.characterTypes);
  } while(!isACharacterTypeSelected(userCriteria));

  return userCriteria;
}

function isACharacterTypeSelected(userCriteria) {
  const userCriteriaKeys = Object.values(userCriteria);
  
  for (let i = 1; i < userCriteriaKeys.length; i ++) {
    if (userCriteriaKeys[i]) {
      return true;
    }
  }
  alert("You did not select any character types to include in your password. \nPlease answer 'OK' at least to one of the character types.");
  return false;
}

// function askCharacterTypes() {
//   let characterTypes = prompt("Select the character type(s) you wish to include in your password by typing the corresponding letter. If you want to include multiple types, please use a comma separated list of letters. \n - lowercase (L) \n - uppercase (U) \n - numberic (N) \n - special characters (S)");

//   while (!areCharactersValid(characterTypes)) {
//     //console.log("Non-valid input: " + characterTypes);
//     characterTypes = prompt(`Sorry, "${characterTypes}" isn't a valid answer.` + "\nYour input should only use the corresponding letter from these options: \n - lowercase (L) \n - uppercase (U) \n - numberic (N) \n - special characters (S) \nAnd should be a comma separated list for multiple selections.");
//   }
//   //console.log("Valid input: " + characterTypes);

//   return characterTypes;
// }

// function areCharactersValid(characterTypes) {
//   if (characterTypes === "" || characterTypes === null) {
//     throw 'Character length not entered. Password generation canceled.';
//   }

//   const convertedCharacterTypes = characterTypes.toUpperCase().replace(/\s+/g, "").split(",");

//   for (let i = 0; i < convertedCharacterTypes.length; i ++) {
//     if (convertedCharacterTypes[i].length > 1 
//       || (convertedCharacterTypes[i] !== "L"
//       && convertedCharacterTypes[i] !== "U"
//       && convertedCharacterTypes[i] !== "N"
//       && convertedCharacterTypes[i] !== "S")) {
//         return false;
//       }
//   }
//   return true;
// }

function askPasswordLength() {
  let length = prompt("How long would you like the password to be? (Must be a number from 8 to 128)");

  while (!isPasswordLengthValid(length)) {
    //console.log("Invalid length: " + length);
    length = prompt(`Sorry, ${length} is an invalid length.` + '\n The length must be: \n - An integer \n - At minimum, 8 \n - At maximum, 128 \nHow long would you like the password to be?');
  }
  //console.log("Valid length: " + length);
  return length;
}

function isPasswordLengthValid(length) {
  if (length === ""|| length === null) {
    throw 'Length not entered. Password generation canceled.';
  }
  const convertedLength = Number(length);
  const validCondition = (!Number.isNaN(convertedLength)
    && convertedLength % 1 === 0
    && convertedLength >= 8 
    && convertedLength <= 128); 

  return validCondition;
}

function generatePassword(userCriteria) {
  const allowableCharacters = getAllowableCharacterList(userCriteria);
  //console.log(allowableCharacters);
  let password = [];

  for (let i = 0; i < userCriteria.length; i ++) {
    const listNum = Math.floor(Math.random() * (allowableCharacters.length));
    const charNum = Math.floor(Math.random() * (allowableCharacters[listNum].length));

    password.push(allowableCharacters[listNum][charNum]);
  }
  password = password.toString().replace(/,/g,"");

  return password;
}

function getAllowableCharacterList(userSelection) {
  let allowableCharacters = [];
  
  if (userSelection.includeLowercase) {
    allowableCharacters.push(getLowercaseList());
  } 
  if (userSelection.includeUppercase) {
    allowableCharacters.push(getUppercaseList());
  } 
  if (userSelection.includeNumbers) {
    allowableCharacters.push(getNumbersList());
  } 
  if (userSelection.includeSpecialChar) {
    allowableCharacters.push(getSpecialCharactersList());
  }
  
  return allowableCharacters;
}

function getLowercaseList() {
  const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return lowercase;
}

function getUppercaseList() {
  const upperCase = getLowercaseList().toString().toUpperCase().split(",");
  return upperCase;
}

function getNumbersList() {
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  return numbers;
}

function getSpecialCharactersList() {
  const specialChar = ['!', '"', '#', "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "\\", "]", "^", "_", "`","{", "|", "}", "~"];
  return specialChar;
}
