const submitButton = document.getElementById("submit-button");
let nifOrNieInput = document.getElementById("nif-or-nie-input");
let letterInput = document.getElementById("letter-input");

let digitControlArray = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

const lettersForNieArray = ["X", "Y", "Z"];

const getNifOrNieInputLength = () => nifOrNieInput.value.length; 
const getNifOrNieInputValue = () => nifOrNieInput.value; 

const changeLetterInputValue = (letter) => (letterInput.value = letter); 

const isNif = (inputValue) => {
  const inputLength = getNifOrNieInputLength();
  if (isNaN(inputValue) || inputLength !== 8) {
    return false;
  } else {
    return true;
  }
}; 

const isNie = (inputValue) => {
  const foundLetter = lettersForNieArray.find(
    (letter) => inputValue.charAt(0) === letter
  );
  inputValue = inputValue.replace(inputValue.charAt(0), "");
  if (
    !foundLetter ||
    isNaN(inputValue) ||
    inputValue.trim().length !== 7
  ) {
    return false;
  } else {
    return true;
  }
};

const removeFirstCharacterIfNie = (nie) => {
  let result;
  result = nie.replace(nie.charAt(0), "");
  return result;
}

const getRemainder = (inputValue) => inputValue % 23; 

const getLetter = (remainder) => {
  const letter = digitControlArray[remainder];
  return letter;
};

const changeFirst3LettersInArray = () => {
  digitControlArray[0] = "X";
  digitControlArray[1] = "Y";
  digitControlArray[2] = "Z";
};

const getLetterInInput = () => {
  let inputValue = getNifOrNieInputValue();
  let remainder;
  let letter;

  if (isNif(inputValue)) {
    remainder = getRemainder(inputValue);
    letter = getLetter(remainder);
  } else if (isNie(inputValue)) {
    changeFirst3LettersInArray();
    inputValue = removeFirstCharacterIfNie(inputValue);
    remainder = getRemainder(inputValue);
    letter = getLetter(remainder);
  } else {
    return alert("wrong info!");
  }

  changeLetterInputValue(letter);

  return letter;
};

submitButton.addEventListener("click", getLetterInInput);
