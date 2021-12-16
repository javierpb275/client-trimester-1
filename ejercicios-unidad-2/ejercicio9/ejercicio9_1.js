const ageResult = () => {
  let age = prompt("What is your age?");
  age = Number(age);
  switch (age) {
    case (age < 0):
      alert("Invalid input");
      break;
    case (age <= 12):
      alert("Kid");
      break;
    case (age >= 13 && age <= 26):
      alert("Young");
      break;
    case (age >= 26 && age <= 60):
      alert("Adult");
      break;
    case (age > 60):
      alert("Retired");
      break;
    default:
      alert("Invalid input");
      break;
  }
};
