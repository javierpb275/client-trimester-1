const resultButton = document.getElementById("result-button");

const moveBitFunction = () => {
  document.write(`125 / 8 = ${125 >> 3}`);
  document.write(`<br>`);
  document.write(`40 x 4 = ${40 << 2}`);
  document.write(`<br>`);
  document.write(`25 / 2 = ${25 >> 1}`);
  document.write(`<br>`);
  document.write(`10 x 16 = ${10 << 4}`);
  document.write(`2 << 3 = ${2 << 3}`);
  document.write(`4 >> 2 = ${4 >> 2 }`);
};

resultButton.addEventListener("click", moveBitFunction);
