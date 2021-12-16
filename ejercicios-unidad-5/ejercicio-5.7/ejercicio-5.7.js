window.onload = initialize;

//VALIDATION FUNCTIONS:
const validateInput = (inputId, errorId) => {
  let inputElement = document.getElementById(inputId);

  if (!inputElement.value.length) {
    document.getElementById(
      `${errorId}`
    ).innerHTML = `${inputId} field is required!`;
    return false;
  }

  if (inputId === "date") {
    let reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (!inputElement.value.match(reg)) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must be like this format: "17/11/2021"`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }
  //----------------------------------------
  if (inputId === "employee") {
    let reg = /[A-Z]{2}[^a-zA-Z]{1}[0-9]{4}/;
    if (!inputElement.value.match(reg)) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must be like this format: "WW$1234"`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "addressee") {
    let reg = /[A-Z]{2-3}_[a-z]*:[0-9]{4}/;
    if (!inputElement.value.match(reg)) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must be like this format: "NM_Madrid:1234"`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }
  //----------------------------------------
  if (inputId === "weight") {
    if (
      isNaN(Number(inputElement.value)) ||
      Number(inputElement.value) < 100 ||
      Number(inputElement.value) > 5000
    ) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must be a number between 100 - 5000`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "bank-account") {
    let reg = /[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/;
    if (!inputElement.value.match(reg)) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputElement.value} is not a bank account`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }
};

const validateFormFields = () => {
  if (
    validateInput("date", "date-error") &&
    validateInput("employee", "employee-error") &&
    validateInput("addressee", "addressee-error") &&
    validateInput("weight", "weight-error") &&
    validateInput("bank-account", "bank-error")
  ) {
    return true;
  } else {
    return false;
  }
};
//--------------------------------------------------

function validateForm(e) {
  if (validateFormFields()) {
    document.getElementById(`intentos`).innerHTML = `OK`;
    return true;
  } else {
    document.getElementById(`errores`).innerHTML = `ERROR`;
    e.preventDefault();
    return false;
  }
}

function initialize() {
  document
    .getElementById("enviar")
    .addEventListener("click", validateForm, false);
}
