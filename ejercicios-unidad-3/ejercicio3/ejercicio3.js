const getResultButton = document.getElementById("get-result-button");

const getResult = () => {
  let result;
  const option = prompt("Introduce option 1, 2, 3 or 4:");

  if (option == 1) {
    const base = prompt("Introduce base:");
    const exponent = prompt("Introduce exponent:");
    result = Math.pow(base, exponent);
  } else if (option == 2) {
    const number = prompt("Introduce number:");
    if (number < 0) {
      return alert("The number cannot be negative.");
    } else {
      result = Math.sqrt(number);
    }
  } else if (option == 3) {
    const decimalNumber = prompt("Introduce decimal number:");
    result = Math.round(decimalNumber);
  } else if (option == 4) {
    const number = prompt("Introduce number:");
    const sine = Math.sin(number);
    const cosine = Math.cos(number);
    const tangent = Math.tan(number);
    result = `sine: ${sine}, cosine: ${cosine}, tangent: ${tangent}`;
  } else {
    return alert("Wrong option. Try again.");
  }

  return alert(result);
};

getResultButton.addEventListener("click", getResult);
