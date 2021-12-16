window.onload = initialize;

//VALIDATION FUNCTIONS:

const validateRadioButton = (
  radioName,
  questionFalseId,
  questionTrueId,
  pId
) => {
  const rbs = document.querySelectorAll(`input[name=${radioName}]`);
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }
  if (!selectedValue) {
    document.getElementById(`${pId}`).classList.add("paragraph-red");
    document.getElementById(
      `${questionFalseId}`
    ).innerHTML = ` You must answer this question!`;
    addResultToTable("You have not answer this question");
    return false;
  } else if (selectedValue === "true") {
    document.getElementById(`${pId}`).classList.remove("paragraph-red");
    document.getElementById(`${questionTrueId}`).innerHTML = ` O`;
    addResultToTable("O");
    return true;
  } else if (selectedValue === "false") {
    document.getElementById(`${pId}`).classList.remove("paragraph-red");
    document.getElementById(`${questionFalseId}`).innerHTML = ` X`;
    addResultToTable("X");
    return false;
  }
};

const addResultToTable = (result) => {
  let ol = document.querySelector("ol");
  let li = document.createElement("li");
  let text = document.createTextNode(result);
  let iDiv = document.createElement("textoli");
  iDiv.appendChild(text);
  li.appendChild(iDiv);
  ol.appendChild(li);
};

const validateFormFields = () => {
  let checkAnswer;
  let result = true;
  for (let index = 1; index <= 10; index++) {
    checkAnswer = validateRadioButton(
      `question${index}`,
      `question${index}-false`,
      `question${index}-true`,
      `question${index}-title`
    );
    if (checkAnswer === false) {
      result = false;
    }
  }

  return result;
};
//--------------------------------------------------

function validateForm(e) {
  if (validateFormFields()) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function initialize() {
  document
    .getElementById("enviar")
    .addEventListener("click", validateForm, false);
}
