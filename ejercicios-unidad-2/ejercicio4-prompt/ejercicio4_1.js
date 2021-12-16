const ageResult = () => {
  const age = prompt("What is your age?");
  const ageNumber = Number(age);
  if (ageNumber < 0) {
    alert("Invalid input");
  } else if (ageNumber <= 12) {
    alert("kid");
  } else if (ageNumber >= 13 && ageNumber <= 26) {
    alert("Young");
  } else if (ageNumber >= 26 && ageNumber <= 60) {
    alert("Adult");
  } else if (ageNumber > 60) {
    alert("Retired");
  }
};
