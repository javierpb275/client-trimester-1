const generateButton = document.getElementById("add-button");

const generateList = () => {
  for (let hora = 9; hora <= 21; hora++) {
    for (let minuto = 0; minuto <= 55; minuto += 5) {
      if (hora !== 21 && minuto !== 5) {
        if (minuto == 0 || minuto == 5) {
          document.write(hora + " : 0" + minuto);
          document.write("<br>");
        } else {
          document.write(hora + " : " + minuto);
          document.write("<br>");
        }
      }
    }
  }
  document.write("21 : 00");
};

generateButton.addEventListener("click", generateList);
