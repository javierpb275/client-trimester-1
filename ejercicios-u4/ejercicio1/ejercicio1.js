const buttonShowNumberCountries = document.getElementById(
  "button-show-number-of-countries"
);
const buttonShowCountriesArray = document.getElementById(
  "button-show-countries-array"
);

const buttonAddCountry = document.getElementById("button-add-country");

const buttonDeleteCountry = document.getElementById("button-delete-country");

const buttonSearchCountry = document.getElementById("button-search-country");

let countriesArray = ["Spain", "Germany", "UK", "France", "USA", "Italy"];

//SHOW NUMBER OF COUNTRIES:
const showNumberOfCountries = () => {
  alert(`number of countries: ${countriesArray.length}`);
  return countriesArray.length;
};

//SHOW THE COUNTRIES ARRAY:
const showCountriesArray = () => {
  const option = prompt(`Show countries "backwards", "sorted" or by default?`);
  if (option === "backwards") {
    countriesArray = countriesArray.reverse();
  } else if (option === "sorted") {
    countriesArray = countriesArray.sort();
  }

  countriesArray.map((country) => {
    document.writeln(`${country}`);
    document.write("<br>");
  });
};

//ADD COUNTRY:
function addCountry() {
  document.write(`<form onsubmit = addCountryBeginning()>`);
  document.write(
    `<br><label> Introduce country to add at the beginning: </label>`
  );
  document.write(`<input id=country-beginning type=name/> <br>`);
  document.write(`<br><input type=submit value=add><br>`);
  document.write(`</form>`);
  document.write(`<form onsubmit = addCountryEnd()>`);
  document.write(`<br><label> Introduce country to add at the end: </label>`);
  document.write(`<input id=country-end type=name> <br>`);
  document.write(`<br><input type=submit value=add><br>`);
  document.write(`</form>`);
}

function addCountryBeginning() {
  this.event.preventDefault();
  let theCountry = document.getElementById("country-beginning").value;
  countriesArray.unshift(theCountry);
  document.write("<br>" + countriesArray + "<br>");
}

function addCountryEnd() {
  this.event.preventDefault();
  let theCountry = document.getElementById("country-end").value;
  countriesArray.push(theCountry);
  document.write("<br>" + countriesArray + "<br>");
}

//DELETE COUNTRY:
function deleteCountry() {
  document.write(`<form onsubmit = deleteCountryBeginning()>`);
  document.write(`<br><label> delete country from the beginning: </label>`);
  document.write(
    `<br><input type=submit value=delete country from beginnig><br>`
  );
  document.write(`</form>`);
  document.write(`<form onsubmit = deleteCountryEnd()>`);
  document.write(`<br><label> delete country from the end: </label>`);
  document.write(`<br><input type=submit value=delete country from end><br>`);
  document.write(`</form>`);
}

function deleteCountryBeginning() {
  this.event.preventDefault();
  countriesArray.shift();
  document.write("<br>" + countriesArray + "<br>");
}

function deleteCountryEnd() {
  this.event.preventDefault();
  countriesArray.pop();
  document.write("<br>" + countriesArray + "<br>");
}

//SEARCH COUNTRY:
const searchCountry = () => {
  const option = prompt(`search country by 'position' or 'name'?`);
  if (option === "position") {
    const position = prompt(`position:`);
    const foundCountry = countriesArray[Number(position)];
    if (!foundCountry) {
      document.write("<br>NOT FOUND<br>");
    } else {
      document.write(`<br>${foundCountry}<br>`);
    }
  } else if (option === "name") {
    const countryName = prompt(`name of country:`);
    const foundCountry = countriesArray.find(
      (country) => country === countryName
    );
    if (!foundCountry) {
      document.write("<br>NOT FOUND<br>");
    } else {
      document.write(`<br>${foundCountry}<br>`);
    }
  }
};

buttonShowNumberCountries.addEventListener("click", showNumberOfCountries);
buttonShowCountriesArray.addEventListener("click", showCountriesArray);
buttonAddCountry.addEventListener("click", addCountry);
buttonDeleteCountry.addEventListener("click", deleteCountry);
buttonSearchCountry.addEventListener("click", searchCountry);
