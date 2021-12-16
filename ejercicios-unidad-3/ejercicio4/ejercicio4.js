const getResultButton = document.getElementById("get-result-button");

const getResult = () => {
  const radio = prompt("Radio Value:");
  document.writeln(`Radio Value: ${radio}\n cm`);
  document.write("<br>");
  document.writeln(`Diameter: ${radio * 2}\n cm`);
  document.write("<br>");
  document.writeln(`Perimeter: ${2 * Math.PI * radio}\n cm2`);
  document.write("<br>");
  document.writeln(`Circle Area: ${Math.PI * radio * radio}\n cm2`);
  document.write("<br>");
  document.writeln(`Sphere Area: ${4 * Math.PI * Math.pow(radio, 2)}\n cm2`);
  document.write("<br>");
  document.writeln(`Sphere Volume: ${(4 / 3) * Math.PI * Math.pow(radio, 3)}\n cm3`);
  document.write("<br>");
};

getResultButton.addEventListener("click", getResult);
