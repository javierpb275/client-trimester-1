const getResultButton = document.getElementById("get-result-button");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getResult = () => {
  const name = prompt(`What is your name?`);
  const surname = prompt(`What is your first surname?`);
  const surname2 = prompt(`What is your second surname?`);
  const lengthOfNameAndSurnames =
    name.trim().length + surname.trim().length + surname2.trim().length;

  const username =
    name.trim().toLowerCase().substring(0, 1) +
    surname.trim().toLowerCase() +
    surname2.trim().toLowerCase().substring(0, 1);

  const username2 =
    capitalizeFirstLetter(name.trim().substring(0, 3)) +
    capitalizeFirstLetter(surname.trim().substring(0, 3)) +
    capitalizeFirstLetter(surname2.trim().substring(0, 3));

  document.writeln(`Name: ${capitalizeFirstLetter(name.trim())}`);
  document.write("<br>");
  document.writeln(`First Surname: ${capitalizeFirstLetter(surname.trim())}`);
  document.write("<br>");
  document.writeln(`Second Surname: ${capitalizeFirstLetter(surname2.trim())}`);
  document.write("<br>");
  document.writeln(`length of name and surnames: ${lengthOfNameAndSurnames}`);
  document.write("<br>");
  document.writeln(`username: ${username}`);
  document.write("<br>");
  document.writeln(`username2: ${username2}`);
  document.write("<br>");
};

getResultButton.addEventListener("click", getResult);
