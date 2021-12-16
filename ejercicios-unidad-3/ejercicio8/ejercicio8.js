const getResultButton = document.getElementById("get-result-button");

const getResult = () => {
const data = prompt("Tell me your info i this format: “nombre:apellidos:teléfono:email:codigopostal”");
const partsOfData = data.split(":");
const emailAssociatedServer = partsOfData[3].split("@");
document.writeln(`Name: ${partsOfData[0]}`);
document.write("<br>");
document.writeln(`Surname: ${partsOfData[1]}`);
document.write("<br>");
document.writeln(`Phone: ${partsOfData[2]}`);
document.write("<br>");
document.writeln(`Email: ${partsOfData[3]}`);
document.write("<br>");
document.writeln(`Zip Code: ${partsOfData[4]}`);
document.write("<br>");
document.writeln(`Email associated server: ${emailAssociatedServer[1]}`);
document.write("<br>");
};

getResultButton.addEventListener("click", getResult);
