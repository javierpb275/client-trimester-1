const submitButton = document.getElementById("submit-button");
let letterInput = document.getElementById("letter-input");

let dnisArray = [
  "673-A",
  "346-B",
  "734-C",
  "864-D",
  "123-A",
  "329-B",
  "204-C",
  "852-D",
];

const getNewDnisArray = () => {
  const newArray = dnisArray.filter(
    (dni) => dni.slice(-1) === letterInput.value
  );

  newArray.map((dni) => {
    document.write(dni);
    document.write("<br>");
  });
  return newArray;
};

submitButton.addEventListener("click", getNewDnisArray);
