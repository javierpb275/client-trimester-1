const getResultButton = document.getElementById("get-result-button");

const getYearsMyBirthdayIsOnSunday = () => {
  let years = [];
  const dayOfBirthday = prompt("day of your birthday?");
  const monthOfBirthday = prompt("month of your birthday?");
  let year = new Date().getFullYear();
  let date;
  while (year <= 2100) {
    date = new Date(`${monthOfBirthday}/${dayOfBirthday}/${year}`);
    if (date.getDay() === 0) {
      years.push(year);
    }
    year++;
  }

  document.write("Years: " + years);
};

getResultButton.addEventListener("click", getYearsMyBirthdayIsOnSunday);
