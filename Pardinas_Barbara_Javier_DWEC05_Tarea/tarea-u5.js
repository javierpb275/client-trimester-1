window.onload = initialize;

//--------------------------------------

//COOKIES CUSTOM FUNCTIONS:

let attemps = 0;

const setCookie = (name, value) => {
  let date = new Date();
  date.setTime(date.getTime() * 2);
  let expiration = "expires = " + date.toUTCString();
  document.cookie = name + " = " + value;
  +";" + expiration + ";path=/";
};

const attemptToSend = () => {
  attemps++;
  setCookie("intentos", attemps);
  document.getElementById("intentos").innerHTML = `Attempts: ${attemps}`;
};

//----------------------------------------------------

//VALIDATION FUNCTIONS:
const validateInput = (inputId, errorId) => {
  let inputElement = document.getElementById(inputId);

  if (!inputElement.value.length) {
    document.getElementById(
      `${errorId}`
    ).innerHTML = `${inputId} field is required!`;
    return false;
  }

  if (inputId === "nombre") {
    if (inputElement.value.length < 2 || inputElement.value.length > 15) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must have between 2-15 characters`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "apellidos") {
    if (inputElement.value.length < 2) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must have more than 2 characters`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "edad") {
    if (
      isNaN(Number(inputElement.value)) ||
      Number(inputElement.value) < 0 ||
      Number(inputElement.value) > 105
    ) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must be a number between 0 - 105`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "telefono") {
    if (isNaN(Number(inputElement.value)) || inputElement.value.length !== 9) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must be a number of 9 digits`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "provincia") {
    if (inputElement.value === "0") {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field is required`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "fecha") {
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

  if (inputId === "hora") {
    let reg = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gm;
    if (!inputElement.value.match(reg)) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must be like this format: "13:02"`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "email") {
    let reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!inputElement.value.match(reg)) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputElement.value} is not an email`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "nif") {
    let reg = /(^([0-9]{8,8}\-[A-Z])|^)$/;
    if (!inputElement.value.match(reg)) {
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputElement.value} is not a NIF`;
      return false;
    } else {
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }
};

const validateFormFields = () => {
  const checkName = validateInput("nombre", "name-error");
  const checkLastName = validateInput("apellidos", "lastname-error");
  const checkAge = validateInput("edad", "age-error");
  const checkNif = validateInput("nif", "nif-error");
  const checkEmail = validateInput("email", "email-error");
  const checkTown = validateInput("provincia", "town-error");
  const checkDate = validateInput("fecha", "date-error");
  const checkPhone = validateInput("telefono", "phone-error");
  const checkTime = validateInput("hora", "time-error");
  if (
    checkName &&
    checkLastName &&
    checkAge &&
    checkNif &&
    checkEmail &&
    checkTown &&
    checkDate &&
    checkPhone &&
    checkTime
  ) {
    return true;
  } else {
    return false;
  }
};
//--------------------------------------------------

const validateForm = (e) => {
  attemptToSend();
  if (
    validateFormFields() &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
};

const onBlurToUpperCase = (inputId) => {
  let inputValue = document.getElementById(inputId).value;
  document.getElementById(inputId).value = inputValue.toUpperCase();
  return inputValue;
};

function initialize() {
  document
    .getElementById("enviar")
    .addEventListener("click", validateForm, false);
}
