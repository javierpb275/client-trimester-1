const askQuestionButton = document.getElementById("ask-question-button");

const askQuestion = () => {
  let answer;
  do {
    answer = prompt("Who was the first president of the spanish democracy?");
    answer = answer.toLocaleLowerCase().trim();
    if (answer === "adolfo") {
      alert("Surname is missing...");
    } else if (answer === "suarez") {
      alert("Name is missing...");
    } else if (answer !== "adolfo suarez") {
      alert("Wrong! Try again.");
    }
  } while (answer !== "adolfo suarez");
  document.write("Right!");
};

askQuestionButton.addEventListener("click", askQuestion);
