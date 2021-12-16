window.onload = initialize;

//----------------------------------------------------

const addWrongStyles = (inputId, labelId) => {
  document.getElementById(`${inputId}`).classList.remove("border-correct");
  document.getElementById(`${labelId}`).classList.remove("label-correct");
  document.getElementById(`${inputId}`).classList.add("border-wrong");
  document.getElementById(`${labelId}`).classList.add("label-wrong");
}

const addCorrectStyles = (inputId, labelId) => {
  document.getElementById(`${inputId}`).classList.remove("border-wrong");
  document.getElementById(`${labelId}`).classList.remove("label-wrong");
  document.getElementById(`${inputId}`).classList.add("border-correct");
  document.getElementById(`${labelId}`).classList.add("label-correct");
}

//VALIDATION FUNCTIONS:
const validateInput = (inputId, errorId, labelId) => {
  let inputElement = document.getElementById(inputId);

  if (!inputElement.value.length) {
    addWrongStyles(inputId, labelId);
    document.getElementById(
      `${errorId}`
    ).innerHTML = `${inputId} field is required!`;
    return false;
  }

  if (inputId === "record" || inputId === "artist") {
    if (inputElement.value.length < 20) {
      addWrongStyles(inputId, labelId);
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} must be 20 characters`;
      return false;
    } else {
      addCorrectStyles(inputId, labelId);
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "come-out-date") {
    if (isNaN(Number(inputElement.value)) || inputElement.value.length > 4) {
      addWrongStyles(inputId, labelId);

      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} is not a year`;
      return false;
    } else {
      addCorrectStyles(inputId, labelId);
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "shelf") {
    if (isNaN(Number(inputElement.value))) {
      addWrongStyles(inputId, labelId);

      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} must be a number`;
      return false;
    } else {
      addCorrectStyles(inputId, labelId);
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }
};

const validateFormFields = () => {
  const checkRecord = validateInput('record', 'record-error', 'label-record');
  const checkArtist = validateInput('record', 'artist-error', 'label-artist');
  const checkComeOutDate = validateInput('come-out-date', 'come-out-date-error', 'label-come-out-date');
  const checkGenre = validateInput('genre', 'genre-error', 'label-genre');
  
  if (checkRecord && checkArtist && checkComeOutDate && checkGenre) {
    return true;
  } else {
    return false;
  }
};
//--------------------------------------------------

const validateForm = (e) => {
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

function initialize() {
  document
    .getElementById("enviar")
    .addEventListener("click", validateForm, false);
}
