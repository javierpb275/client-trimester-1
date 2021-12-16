const getResultButton = document.getElementById("get-result-button");

const getResult = () => {
  const number = prompt("Introduce number:");
  const num = Number(number);
  document.writeln(`Exponential value: ${Math.exp(num)}\n`);
  document.write("<br>");
  document.writeln(`Number with 4 decimals: ${num.toFixed(4)}\n`);
  document.write("<br>");
  document.writeln(`Binary Number: ${num.toString(2)}\n`);
  document.write("<br>");
  document.writeln(`Octal Number: ${num.toString(8)}\n`);
  document.write("<br>");
  document.writeln(`Hexadecimal Number: ${num.toString(16)}\n`);
  document.write("<br>");
};

getResultButton.addEventListener("click", getResult);
