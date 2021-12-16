window.onload = initialize;

class Client {
  constructor(dni, passport, birthdate, securityKey) {
    this.dni = dni;
    this.passport = passport;
    this.birthdate = birthdate;
    this.remember = false;
    this.securityKey = securityKey;
  }

  checkDocument(document) {
    return this.document === document;
  }

  checkBirthdate(birthdate) {
    return this.birthdate === birthdate;
  }

  checkSecurityKey(securityKey) {
    return this.securityKey === securityKey;
  }

  setDocument(dni) {
    this.dni = dni;
  }

  setPassport(passport) {
    this.passport = passport;
  }

  setBirthdate(birthdate) {
    this.birthdate = birthdate;
  }

  setSecurityKey(securityKey) {
    this.securityKey = securityKey;
  }

  setRemember(remember) {
    this.remember = remember;
    if (remember) {
      localStorage.setItem("remember-ing", true);
      localStorage.setItem("dni-ing", this.dni);
      localStorage.setItem("birthdate-ing", this.birthdate);
      localStorage.setItem("security-key-ing", this.securityKey);
    } else {
      localStorage.removeItem("remember-ing");
      localStorage.removeItem("dni-ing");
      localStorage.removeItem("birthdate-ing");
    }
  }
}

const client1 = new Client("12345678-X", "AA000000", "01/01/1991", "012345");
const client2 = new Client("87654321-Y", "BB000000", "02/02/1992", "987654");

let db = [client1, client2];

const getRadioButtonSelected = (radioName) => {
  const rbs = document.querySelectorAll(`input[name=${radioName}]`);
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }
  return selectedValue;
};

const getClient = () => {
  const radioValue = getRadioButtonSelected("document");
  let inputDNI = document.getElementById("dni-input");
  let inputDate = document.getElementById("date-input");
  let foundClient;

  if (radioValue === "dni") {
    foundClient = db.find((client) => {
      return client.dni === inputDNI.value && client.birthdate === inputDate.value;
    });
    localStorage.setItem("ingDni", foundClient.dni);
  } else if (radioValue === "passport") {
    foundClient = db.find((client) => {
      return client.passport === inputDNI.value &&
        client.birthdate === inputDate.value;
    });
    localStorage.setItem("ingPassport", foundClient.passport);
  }

  if (foundClient) {
    saveClientInWebStorage(foundClient);
    if (document.getElementById('remember').checked) {
      displayLocalStorageValuesOnInputs();
    }
  }

  return foundClient;
};

const saveClientInWebStorage = (client) => {
  localStorage.setItem("ingBirthdate", client.birthdate);
  localStorage.setItem("ingSecurityKey", client.securityKey);
}

const displayLocalStorageValuesOnInputs = () => {
  if (localStorage.getItem("ingDni")) {
    document.getElementById("dni-input").value = localStorage.getItem("ingDni");
  }
  if (localStorage.getItem("ingPassport")) {
    document.getElementById("dni-input").value = localStorage.getItem("ingPassport");
  }
  if (localStorage.getItem("ingBirthdate")) {
    document.getElementById("date-input").value = localStorage.getItem("ingBirthdate");
  }

  return;
}

const validateForm = (e) => {
  const foundClient = getClient();
  if (foundClient) {
    return true;
  } else {
    e.preventDefault();
    alert("wrong credentials!");
    return false;
  }
};

const handleSecurityKeyForm = () => {

}

function initialize() {
  document
    .getElementById("enviar")
    .addEventListener("click", validateForm, false);
}
