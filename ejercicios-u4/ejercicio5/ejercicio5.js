const buttonShowStrength = document.getElementById("button-show-strength");
const buttonIncreaseStrength = document.getElementById("button-increase-strength");

class Player {
  constructor() {
    this.strength = 1;
  }
  increaseStrength = () => {
    this.strength++;
    console.log(this.strength);
    return this.strength;
  };
  showStrength = () => {
    document.write(`your strength is ${this.strength}`);
    return this.strength;
  };
}

let player1 = new Player();



buttonShowStrength.addEventListener("click", player1.showStrength);
buttonIncreaseStrength.addEventListener("click", player1.increaseStrength);
