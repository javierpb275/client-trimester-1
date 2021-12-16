const buttonMultiplyTable7 = document.getElementById("multiply-table-7-button");
const buttonSumTable8 = document.getElementById("sum-table-8-button");
const buttonDivideTable9 = document.getElementById("divide-table-9-button");

const generateMultiplyTable7 = () => {
  for (let index = 0; index <= 10; index++) {
    document.write(`7 x ${index} = ${7 * index}`);
    document.write(`<br>`);
  }
};

const generateSumTable8 = () => {
  let index = 0;
  while (index <= 10) {
    document.write(`8 + ${index} = ${8 + index}`);
    document.write(`<br>`);
    index++;
  }
};

const generateDivideTable9 = () => {
  let index = 0;
  do {
    document.write(`9 / ${index} = ${9 / index}`);
    document.write(`<br>`);
    index++;
  } while (index <= 10);
};

buttonMultiplyTable7.addEventListener("click", generateMultiplyTable7);
buttonSumTable8.addEventListener("click", generateSumTable8);
buttonDivideTable9.addEventListener("click", generateDivideTable9);
