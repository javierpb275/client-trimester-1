const mostrarTabla = () => {
  this.event.preventDefault();
  const numero = Number(document.getElementById("numero").value);
  if (numero >= 0 && numero <= 10) {
    let tabla = document.getElementById("tabla");
    let tablaMultiplicar = `<h2>Tabla de multiplicar del número ${numero}</h2>`;
    tablaMultiplicar += "<ul>";
    for (let i = 0; i <= 10; i++) {
      tablaMultiplicar += `<li>${numero} * ${i} = ${numero * i}</li>`;
    }
    tablaMultiplicar += "</ul>";
    tabla.innerHTML = tablaMultiplicar;
  } else {
    alert("El número introducido debe estar entre 0 y 10 (ambos inclusive");
    document.getElementById("numero").value = "";
  }
};
