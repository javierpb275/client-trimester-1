window.onload = initialize;

const changeSeat = (imgId) => {
  const imgSrc = document.getElementById(imgId).src.split("ej4/");
  if (imgSrc[1] === "disponible.png") {
    document.getElementById(imgId).src = `${imgSrc[0]}ej4/ocupada.png`;
  } else {
    alert("This seat is already taken");
  }
};

const calculatePriceOfTakenSeats = () => {
  let takenSeatsPrice = 0;
  let imgSrc;
  for (let index = 0; index < 30; index++) {
    imgSrc = document.getElementById(`img-${index}`).src.split("ej4/");
    if (imgSrc[1] === "ocupada.png") {
      takenSeatsPrice += 5;
    }
  }

  alert(`The total price of taken seats is: €${takenSeatsPrice}`);

  return takenSeatsPrice;
};

function initialize() {
  document
    .getElementById("calculate-button")
    .addEventListener("click", calculatePriceOfTakenSeats, false);
}
