// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]; //valid
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]; //valid

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const validateCred = (arr) => {
  let checkLuhn = arr.map((a) => a);
  // checkLuhn.pop();
  let doLhun = true;
  for (let i = checkLuhn.length - 1 - 1; i >= 0; i--) {
    if (doLhun) {
      checkLuhn[i] *= 2;
      if (checkLuhn[i] > 9) {
        checkLuhn[i] -= 9;
      }
      doLhun = false;
    } else {
      doLhun = true;
    }
  }
  // console.log(arr);
  // console.log(checkLuhn);
  let modCheck = checkLuhn.reduce((sum, item) => sum + item);
  // console.log(modCheck);
  return modCheck % 10 === 0;
};
const findInvalidCards = (arrArr) => {
  const invalidCards = arrArr.filter((arr) => validateCred(arr) === false);
  // console.log(invalidCards);
  // console.log("=======================");
  // console.log(arrArr);
  return invalidCards;
};
const idInvalidCardCompanies = (arrArr) => {
  let companyNames = [];

  arrArr.forEach((arr) => {
    switch (arr[0]) {
      case 3:
        companyNames.push("Amex (American Express)");
        break;
      case 4:
        companyNames.push("Visa");
        break;
      case 5:
        companyNames.push("Mastercard");
        break;
      case 6:
        companyNames.push("Discover");
        break;
      default:
        companyNames.push("Company not found");
    }
  });
  companyNames = Array.from(new Set(companyNames));
  return companyNames;
};

// const invalidCompanies = idInvalidCardCompanies(findInvalidCards(batch));
// console.log(invalidCompanies);

const visaStrToNumArr = (input) => {
  return input.split("").map(Number);
};
// const generatedVisa1 = visaStrToNumArr("6011594685943702655");
// console.log(generatedVisa1);
const validatingInvalidatedCard = (arr) => {
  let checkLuhn = arr.map((a) => a);
  let doLhun = true;
  for (let i = checkLuhn.length - 1 - 1; i >= 0; i--) {
    if (doLhun) {
      checkLuhn[i] *= 2;
      if (checkLuhn[i] > 9) {
        checkLuhn[i] -= 9;
      }
      doLhun = false;
    } else {
      doLhun = true;
    }
  }
  let modCheck = checkLuhn.reduce((sum, item) => sum + item);
  let fixThisNum = arr.pop();
  // console.log("pre fix = "+fixThisNum);
  fixThisNum = (fixThisNum + (10 - (modCheck % 10))) % 10;
  // console.log("fix = "+fixThisNum);
  arr.push(fixThisNum);
  // console.log(arr);
  // console.log(modCheck);
  return arr;
};
console.log(validateCred(validatingInvalidatedCard(invalid1)));
console.log(validateCred(validatingInvalidatedCard(invalid2)));
console.log(validateCred(validatingInvalidatedCard(invalid3)));
console.log(validateCred(validatingInvalidatedCard(invalid4)));
console.log(validateCred(validatingInvalidatedCard(invalid5)));
