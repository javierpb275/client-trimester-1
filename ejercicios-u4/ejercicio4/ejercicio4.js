class Record {
  constructor() {
    this.name = "";
    this.band = "";
    this.year = "";
    this.genre = "";
    this.shelf = 0;
    this.borrowed = false;
    this.jacket = "";
  }

  changeShelf(shelfNumber) {
    this.shelf = shelfNumber;
  }

  changeBorrowed(someBoolean) {
    this.borrowed = someBoolean;
  }

  recordInfo() {
    let isBorrowed;
    if (this.borrowed == false) {
      isBorrowed = "no";
    } else if (this.borrowed == true) {
      isBorrowed = "sí";
    }

    alert(
      `Este disco es ${this.name}, de ${this.band}, del año ${this.year}. Pertenece a la corriente musical: ${this.genre}. Se encuentra en la estantería número ${this.shelf}, y ${isBorrowed} está prestado. Su carátula es ${this.jacket}`
    );
  }
}

let recordsArray = [];

recordsArray.push(new Record());
recordsArray[0].name = "Blood Sugar Sex Magik";
recordsArray[0].band = "Red Hot Chili Peppers";
recordsArray[0].year = "1991";
recordsArray[0].genre = "Funk Rock";
recordsArray[0].shelf = 0;
recordsArray[0].jacket = `<img src="https://m.media-amazon.com/images/I/61QBNBR63zL._SL500_.jpg" alt="Blood Sugar Sex Magik" width="100" height="100">`;

recordsArray.push(new Record());
recordsArray[1].name = "Rage Against The Machine";
recordsArray[1].band = "Rage Against The Machine";
recordsArray[1].year = "1992";
recordsArray[1].genre = "Rock";
recordsArray[1].shelf = 0;
recordsArray[1].jacket = `<img src="https://m.media-amazon.com/images/I/81Hj5Wf1Z7L._SL1500_.jpg" alt="Rage Against The Machine" width="100" height="100">`;

recordsArray.push(new Record());
recordsArray[2].name = "He Got Game";
recordsArray[2].band = "Pubic Enemy";
recordsArray[2].year = "1998";
recordsArray[2].genre = "Hip Hop";
recordsArray[2].shelf = 0;
recordsArray[2].jacket = `<img src="https://img.discogs.com/nv--ccbJM_8YW7ouWK4aKdxbVZw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-477627-1531318323-5998.jpeg.jpg" alt="he got game" width="100" height="100">`;

function toggleShow(idOptions) {
  let theDiv = document.getElementById(idOptions);
  if (theDiv.style.display === "block") {
    theDiv.style.display = "none";
  } else {
    theDiv.style.display = "block";
  }
}

function numberOfRecords() {
  alert(
    `El número de discos guardados en el array es de: ${recordsArray.length}`
  );
}

function showSortedRecords() {
  document.write(`<table border=2>`);
  document.write(`<tr>`);
  document.write(`<td>NOMBRE</td>`);
  for (let i = 0; i < recordsArray.length; i++) {
    document.write(`<td>${recordsArray[i].name} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>GRUPO</td>`);
  for (let i = 0; i < recordsArray.length; i++) {
    document.write(`<td>${recordsArray[i].band} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>AÑO</td>`);
  for (let i = 0; i < recordsArray.length; i++) {
    document.write(`<td>${recordsArray[i].year} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>CORRIENTE</td>`);
  for (let i = 0; i < recordsArray.length; i++) {
    document.write(`<td>${recordsArray[i].genre} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>ESTANTERÍA</td>`);
  for (let i = 0; i < recordsArray.length; i++) {
    document.write(`<td>${recordsArray[i].shelf} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>PRESTADO</td>`);
  for (let i = 0; i < recordsArray.length; i++) {
    document.write(`<td>${recordsArray[i].borrowed} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>CARÁTULA</td>`);
  for (let i = 0; i < recordsArray.length; i++) {
    document.write(`<td>${recordsArray[i].jacket} </td>`);
  }
  document.write(`</tr>`);
  document.write(`</table>`);
}

function showBackwards() {
  document.write(`<table border=2>`);
  document.write(`<tr>`);
  document.write(`<td>NOMBRE</td>`);
  for (let i = recordsArray.length - 1; i >= 0; i--) {
    document.write(`<td>${recordsArray[i].name} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>GRUPO</td>`);
  for (let i = recordsArray.length - 1; i >= 0; i--) {
    document.write(`<td>${recordsArray[i].band} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>AÑO</td>`);
  for (let i = recordsArray.length - 1; i >= 0; i--) {
    document.write(`<td>${recordsArray[i].year} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>CORRIENTE</td>`);
  for (let i = recordsArray.length - 1; i >= 0; i--) {
    document.write(`<td>${recordsArray[i].genre} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>ESTANTERÍA</td>`);
  for (let i = recordsArray.length - 1; i >= 0; i--) {
    document.write(`<td>${recordsArray[i].shelf} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>PRESTADO</td>`);
  for (let i = recordsArray.length - 1; i >= 0; i--) {
    document.write(`<td>${recordsArray[i].borrowed} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>CARÁTULA</td>`);
  for (let i = recordsArray.length - 1; i >= 0; i--) {
    document.write(`<td>${recordsArray[i].jacket} </td>`);
  }
  document.write(`</tr>`);
  document.write(`</table>`);
}

function showSortedAbc() {
  let abc = recordsArray.sort();

  document.write(`<table border=2>`);
  document.write(`<tr>`);
  document.write(`<td>NOMBRE</td>`);
  for (let i = 0; i < abc.length; i++) {
    document.write(`<td>${abc[i].name} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>GRUPO</td>`);
  for (let i = 0; i < abc.length; i++) {
    document.write(`<td>${abc[i].band} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>AÑO</td>`);
  for (let i = 0; i < abc.length; i++) {
    document.write(`<td>${abc[i].year} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>CORRIENTE</td>`);
  for (let i = 0; i < abc.length; i++) {
    document.write(`<td>${abc[i].genre} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>ESTANTERÍA</td>`);
  for (let i = 0; i < abc.length; i++) {
    document.write(`<td>${abc[i].shelf} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>PRESTADO</td>`);
  for (let i = 0; i < abc.length; i++) {
    document.write(`<td>${abc[i].borrowed} </td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr>`);
  document.write(`<td>CARÁTULA</td>`);
  for (let i = 0; i < abc.length; i++) {
    document.write(`<td>${abc[i].jacket} </td>`);
  }
  document.write(`</tr>`);
  document.write(`</table>`);
}

function atTheBeginning() {
  let theName = prompt(`Introduce el nombre del disco: `);
  let theBand = prompt(`Introduce el nombre del grupo: `);
  let theYear = prompt(`Introduce el año de salida: `);
  let theGenre = prompt(`Introduce su corriente musical: `);
  let theShelf = prompt(
    `Introduce el número de la estantería donde quieras guardarlo: `
  );
  let boolBorrowed = prompt(
    `Introduce false si no está prestado, y true si está prestado `
  );

  let newRecord = new Record();
  recordsArray[0].name = theName;
  recordsArray[0].band = theBand;
  recordsArray[0].year = theYear;
  recordsArray[0].genre = theGenre;
  recordsArray[0].shelf = theShelf;
  recordsArray[0].borrowed = boolBorrowed;

  if (newRecord != null) {
    recordsArray.unshift(newRecord);
    alert("Nuevo disco añadido correctamente");
  }
}

function atTheEnd() {
  let theName = prompt(`Introduce el nombre del disco: `);
  let theBand = prompt(`Introduce el nombre del grupo: `);
  let theYear = prompt(`Introduce el año de salida: `);
  let theGenre = prompt(`Introduce su corriente musical: `);
  let theShelf = prompt(
    `Introduce el número de la estantería donde quieras guardarlo: `
  );
  let boolBorrowed = prompt(
    `Introduce false si no está prestado, y true si está prestado `
  );

  let newRecord = new Record();

  if (newRecord != null) {
    recordsArray.push(newRecord);

    let position = recordsArray.length - 1;
    recordsArray[position].name = theName;
    recordsArray[position].band = theBand;
    recordsArray[position].year = theYear;
    recordsArray[position].genre = theGenre;
    recordsArray[position].shelf = theShelf;
    recordsArray[position].borrowed = boolBorrowed;

    alert("Nuevo disco añadido correctamente");
  }
}

function deleteAtTheBeginning() {
  let deletedRecord = recordsArray.shift();
  alert(`Se ha borrado: ${deletedRecord.name}`);
}

function deleteAtTheEnd() {
  let deletedRecord = recordsArray.pop();
  alert(`Se ha borrado: ${deletedRecord.name}`);
}

function checkByPosition() {
  let theShelf = prompt(
    "Introduzca la posición del elemento que quiera consultar, dentro del array:"
  );
  alert(
    `El disco colocado en la posición ${theShelf} del array es: ${recordsArray[theShelf].name}`
  );
}

function checkByName() {
  let theName = prompt(
    "Introduzca el nombre del país, y le diremos su posición en el array:"
  );

  let indexRecord = recordsArray.findIndex((record) => record.name == theName);

  alert(`La posición en el array de ${theName}, es: ${indexRecord}`);
}
