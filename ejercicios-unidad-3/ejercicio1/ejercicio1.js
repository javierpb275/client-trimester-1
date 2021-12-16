const getResultButton = document.getElementById("get-result-button");

const getDaysToEndOfCourse = () => {
  // To set two dates to two variables
  const today = new Date();
  const endOfCourse = new Date("06/22/2022");

  // To calculate the time difference of two dates
  const differenceInTime = endOfCourse.getTime() - today.getTime();

  // To calculate the no. of days between two dates
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  //To display the final no. of days (result)
  document.write("Number of days to end the course: " + Math.round(differenceInDays));
};

getResultButton.addEventListener("click", getDaysToEndOfCourse);
