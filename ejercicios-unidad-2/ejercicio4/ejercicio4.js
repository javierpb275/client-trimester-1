const ageResult = (age) => {
  if (age < 0) {
    alert("Invalid input");
  } else if (age <= 12) {
    alert("kid");
  } else if (age >= 13 && age <= 26) {
    alert("Young");
  } else if (age >= 26 && age <= 60) {
    alert("Adult");
  } else if (age > 60) {
    alert("Retired");
  }
};
