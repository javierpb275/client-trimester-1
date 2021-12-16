window.onload = initialize;

let array = [50, 22, 47, 38, 26 ];

const displayArray = () => {
  document.getElementById("numbers").innerHTML = array;
  document.getElementById("chageable-text").innerHTML = "ver por orden de aparición";
};

const sortArray = () => {
  document.getElementById("numbers").innerHTML = [...array].sort();
  document.getElementById("chageable-text").innerHTML = "ver de menor a mayor";
};

function initialize() {
  displayArray();
  document
    .getElementById("chageable-text")
    .addEventListener("mouseover", sortArray, false);
    document
    .getElementById("chageable-text")
    .addEventListener("mouseout", displayArray, false);
}
