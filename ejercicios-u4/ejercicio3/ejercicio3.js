//show table elements
const buttonShowTable = document.getElementById("button-show-table");
//search by province elements
const buttonSearchByProvince = document.getElementById(
  "button-search-by-province"
);
let provinceInput = document.getElementById("province-input");
//search by fees elements
const buttonSearchByFees = document.getElementById("button-search-by-fees");
let optionInput = document.getElementById("option");
let feesInput = document.getElementById("fees-input");

class Client {
  constructor(name, province, fees) {
    this.name = name;
    this.province = province;
    this.fees = fees;
  }
}

let client1 = new Client("Laura", "Santander", 50);
let client2 = new Client("Álvaro", "Castro", 50);
let client3 = new Client("Igor", "Castro", 60);
let client4 = new Client("Ivan", "Santander", 40);
let client5 = new Client("Mónica", "Zamora", 30);
let client6 = new Client("Javi", "Bilbao", 30);
let client7 = new Client("David", "Bilbabo", 50);

const clientsArray = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
];

const showTable = () => {
  document.write(`<table>`);
  document.write(`<tr>`);
  document.write(`<th>Name</th>`);
  document.write(`<th>Province</th>`);
  document.write(`<th>Fees</th>`);
  document.write(`</tr>`);
  clientsArray.map((client) => {
    document.write(`<tr>`);
    document.write(`<td>${client.name}</td>`);
    document.write(`<td>${client.province}</td>`);
    document.write(`<td>${client.fees}</td>`);
    document.write(`</tr>`);
  });
  document.write(`</table>`);
  return clientsArray;
};

const searchByProvince = () => {
  const newClientsArray = clientsArray.filter(
    (client) => client.province === provinceInput.value
  );
  document.write(`<table>`);
  document.write(`<tr>`);
  document.write(`<th>Name</th>`);
  document.write(`<th>Fees</th>`);
  document.write(`</tr>`);
  newClientsArray.map((client) => {
    document.write(`<tr>`);
    document.write(`<td>${client.name}</td>`);
    document.write(`<td>${client.fees}</td>`);
    document.write(`</tr>`);
  });
  document.write(`</table>`);
  return newClientsArray;
};

const searchByFees = () => {
  let newClientsArray;
  if (optionInput.value === "lower") {
    newClientsArray = clientsArray.filter(
      (client) => client.fees < feesInput.value
    );
  } else if (optionInput.value === "bigger") {
    newClientsArray = clientsArray.filter(
      (client) => client.fees > feesInput.value
    );
  }
  document.write(`<table>`);
  document.write(`<tr>`);
  document.write(`<th>Name</th>`);
  document.write(`<th>Province</th>`);
  document.write(`<th>Fees</th>`);
  document.write(`</tr>`);
  newClientsArray.map((client) => {
    document.write(`<tr>`);
    document.write(`<td>${client.name}</td>`);
    document.write(`<td>${client.province}</td>`);
    document.write(`<td>${client.fees}</td>`);
    document.write(`</tr>`);
  });
  document.write(`</table>`);
  return newClientsArray;
};

buttonShowTable.addEventListener("click", showTable);
buttonSearchByProvince.addEventListener("click", searchByProvince);
buttonSearchByFees.addEventListener("click", searchByFees);
