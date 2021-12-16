window.onload = initialize;

//----------------------------------------------------

//VALIDATION FUNCTIONS:
const getInputValue = (inputId) => document.getElementById(inputId).value;

const validateInput = (inputId) => {
  let inputElement = document.getElementById(inputId);

  if (!inputElement.value.length) {
    return false;
  }

  if (inputId === "name") {
    if (inputElement.value.length < 2 || inputElement.value.length > 15) {
      return false;
    } else {
      return true;
    }
  }

  if (inputId === "email-phone") {
    let reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      inputElement.value.match(reg) ||
      (!isNaN(Number(inputElement.value)) && inputElement.value.length === 9)
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (inputId === "password") {
    if (inputElement.value.length < 3) {
      return false;
    } else {
      return true;
    }
  }

  if (inputId === "confirm-password") {
    if (inputElement.value !== getInputValue("password")) {
      return false;
    } else {
      return true;
    }
  }
};

//---------------------------------------------------

//VALIDATE FORM:

const validateForm = (e) => {
  if (
    validateInput("name") &&
    validateInput("email-phone") &&
    validateInput("password") &&
    validateInput("confirm-password")
  ) {
    localStorage.setItem("name", getInputValue("name"));
    localStorage.setItem("emailPhone", getInputValue("email-phone"));
    return true;
  } else {
    e.preventDefault();
    return false;
  }
};

//--------------------------------------------------

const displayLocalStorageValuesOnInputs = () => {
  if (localStorage.getItem("name")) {
    document.getElementById("name").value = localStorage.getItem("name");
  }
  if (localStorage.getItem("emailPhone")) {
    document.getElementById("email-phone").value = localStorage.getItem("emailPhone");
  }
  return;
}

function initialize() {
  displayLocalStorageValuesOnInputs();
  document
    .getElementById("submit-button")
    .addEventListener("click", validateForm, false);
}
