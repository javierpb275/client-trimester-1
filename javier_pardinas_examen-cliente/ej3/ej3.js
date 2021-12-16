window.onload = initialize;

//--------------------------------------
//THE CLASS PERSON

class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.ages = age;
  }

  setEmail(email) {
    this.email = email;
  }
}

const person1 = new Person("pepe", "40", "pepe@gmail.com");
const person2 = new Person("paco", "30", "paco@gmail.com");
const person3 = new Person("neno", "12", "neno@gmail.com");
const person4 = new Person("nena", "17", "nena@gmail.com");

let db = [person1, person2, person3, person4];

//-------------------------------
//VALIDATION FUNCTIONS:
const getInputValue = (inputId) => document.getElementById(inputId).value;

const validateInput = (inputId, errorId) => {
  let inputElement = document.getElementById(inputId);

  if (!inputElement.value.length) {
    document.getElementById(
      `${errorId}`
    ).innerHTML = `${inputId} field is required!`;
    document.getElementById(inputId).classList.add("error");
    return false;
  }

  if (inputId === "nombre") {
    if (inputElement.value.length < 2 || inputElement.value.length > 20) {
      document.getElementById(inputId).classList.add("error");
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must have between 2-20 characters`;
      return false;
    } else {
      document.getElementById(inputId).classList.remove("error");
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "edad") {
    if (
      isNaN(Number(inputElement.value)) ||
      Number(inputElement.value) < 0 ||
      Number(inputElement.value) > 150
    ) {
      document.getElementById(inputId).classList.add("error");
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field must be a number between 0 - 150`;
      return false;
    } else {
      document.getElementById(inputId).classList.remove("error");
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }

  if (inputId === "email") {
    let reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!inputElement.value.match(reg)) {
      document.getElementById(inputId).classList.add("error");
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputElement.value} is not an email`;
      return false;
    } else {
      document.getElementById(inputId).classList.remove("error");
      document.getElementById(`${errorId}`).innerHTML = ``;
      return true;
    }
  }
};

const validateFormFields = () => {
  const checkName = validateInput("nombre", "name-error");
  const checkAge = validateInput("edad", "age-error");
  const checkEmail = validateInput("email", "email-error");
  if (checkName && checkAge && checkEmail) {
    return true;
  } else {
    return false;
  }
};
//--------------------------------------------------
//CALCULATE BUTTON:

const getMinorPeopleQuantity = () => {
  const theAge = prompt("Tell me the age:");
  const minorPeople = db.filter((person) => person.age < Number(theAge));
  document.getElementById(
    `calculate-message`
  ).innerHTML = `There are ${minorPeople.length} younger people than ${theAge}`;
};

//-------------------------------------------------
//LOCAL STORAGE
const welcomeMessage = () => {
    if (localStorage.getItem("name-ejercicio-3") === getInputValue("nombre")) {
        document.getElementById(
            `welcome-message`
          ).innerHTML = `Welcome again ${localStorage.getItem("name-ejercicio-3")}!`;
    } else {
        localStorage.setItem("name-ejercicio-3", getInputValue("nombre"));
    }
}

//------------------------------------------------

const validateForm = (e) => {
    e.preventDefault();
  if (validateFormFields()) {
      welcomeMessage();
    const newPerson = new Person(
      document.getElementById("nombre").value,
      document.getElementById("edad").value,
      document.getElementById("email").value
    );
    db.push(newPerson);
    return true;
  } else {
    return false;
  }
};

function initialize() {
  document
    .getElementById("enviar")
    .addEventListener("click", validateForm, false);
  document
    .getElementById("calculate-button")
    .addEventListener("click", getMinorPeopleQuantity, false);
}
