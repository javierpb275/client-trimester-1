const askQuestionButton = document.getElementById("ask-question-button");

const askQuestion = () => {
  let answer;
  do {
    answer = prompt("Who was the first president of the spanish democracy?");
    if (answer.toLocaleLowerCase().trim() !== "adolfo suarez") {
      alert("Wrong! Try again.");
    }
  } while (answer.toLocaleLowerCase().trim() !== "adolfo suarez");

  document.write("Right!");
};

askQuestionButton.addEventListener("click", askQuestion);
