let ul = document.querySelector("ul");

class Floor {
  constructor(number) {
    this.number = number;
    this.doors = [];
  }

  addDoor(door) {
    this.doors.push(door);
    return door;
  }

  setNumber(number) {
    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  setDoors(doors) {
    this.doors = doors;
  }

  getDoors() {
    return this.doors;
  }
}

class Door {
  constructor(number) {
    this.number = number;
    this.owner = "";
  }

  setNumber(number) {
    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  setOwner(owner) {
    this.owner = owner;
  }

  getOwner() {
    return this.owner;
  }
}

class Building {
  constructor(name, street, number, zipCode) {
    this.name = name;
    this.street = street;
    this.number = number;
    this.zipCode = zipCode;
    this.floors = [];
  }

  showFloors() {
    this.floors.map((floor) => {
      floor.doors.map((door) => {
        let li = document.createElement("li");
        li.appendChild(
          document.createTextNode(
            `Floor: ${floor.getNumber()}, Door: ${door.getNumber()}, Owner: ${door.getOwner()}`
          )
        );
      });
    });
    return this.floors;
  }

  addFloor(floor) {
    this.floors.push(floor);
    return floor;
  }

  addFloorsAndDoors(numberOfFloors, numberOfDoors) {
    let newFloor;
    let newDoor;
    for (let f = 1; f <= numberOfFloors; f++) {
      newFloor = new Floor(this.floors.length + 1);
      for (let d = 1; d <= numberOfDoors; d++) {
        newDoor = new Door(newFloor.doors.length + 1);
        newFloor.addDoor(newDoor);
      }
      this.addFloor(newFloor);
    }
    let li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `added ${numberOfFloors} floors and ${numberOfDoors} doors. ${this.getName()} floors: ${
          this.floors.length
        }`
      )
    );
    ul.appendChild(li);

    return this.floors;
  }

  addOwner(name, floor, door) {
    let foundFloor = this.floors.find((theFloor) => theFloor.number === floor);
    if (!foundFloor) {
      foundFloor = new Floor(this.floors.length + 1);
    }
    let foundDoor = foundFloor.doors.find((theDoor) => theDoor.number === door);
    if (!foundDoor) {
      foundDoor = new Door(foundFloor.doors.length + 1);
      foundDoor.setOwner(name);
      foundFloor.addDoor(foundDoor);
    } else {
      foundDoor.setOwner(name);
    }
    let li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${foundDoor.getOwner()} now is the owner of the ${foundDoor.getNumber()} door on the ${foundFloor.getNumber()} floor at ${this.getName()}`
      )
    );
    ul.appendChild(li);
    return foundDoor.getOwner();
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setNumber(number) {
    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  setStreet(street) {
    this.street = street;
  }

  getStreet() {
    return this.street;
  }

  setZipCode(zipCode) {
    this.zipCode = zipCode;
  }

  getZipCode() {
    return this.zipCode;
  }
}

let buildingsArray = [];

const createBuilding = (name, street, number, zipCode) => {
  const newBuilding = new Building(name, street, number, zipCode);
  buildingsArray.push(newBuilding);

  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      `Created ${newBuilding.name} at: Street: ${newBuilding.street}, Number: ${newBuilding.number}, Zip Code: ${newBuilding.zipCode}`
    )
  );
  ul.appendChild(li);
  return newBuilding;
};

const addFloorsAndDoors = (buildingName, numOfFloors, numOfDoors) => {
  let foundBuilding = buildingsArray.find(
    (building) => building.getName() === buildingName
  );
  let floors = foundBuilding.addFloorsAndDoors(numOfFloors, numOfDoors);
  return floors;
};

const addOwner = (buildingName, smName, smFloor, smDoor) => {
  let foundBuilding = buildingsArray.find(
    (building) => building.getName() === buildingName
  );
  let owner = foundBuilding.addOwner(smName, smFloor, smDoor);
  return owner;
};

const showFloors = (buildingName) => {
  let foundBuilding = buildingsArray.find(
    (building) => building.getName() === buildingName
  );
  foundBuilding.showFloors();
  return foundBuilding;
};

