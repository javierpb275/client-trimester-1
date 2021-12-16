window.addEventListener("load", askName);

const askName = () => {
  let theName;
  if (!document.cookie) {
    theName = prompt("Write your name: ");
    document.cookie = `name = ${theName}`;
  } else {
    let name = document.cookie.split("=")[1];
    alert(`Welcome back, ${name}`);
  }
};

let arrayImg = [
  "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/sunny-flashcard.jpg",
  "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/rainy-flashcard.jpg",
  "https://i2.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/windy-flashcard.jpg",
  "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/cloudy-flashcard.jpg",
  "https://i2.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/snowy-flashcard.jpg",
  "https://i0.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/stormy-flashcard.jpg",
  "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/sunny-flashcard.jpg",
  "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/rainy-flashcard.jpg",
  "https://i2.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/windy-flashcard.jpg",
  "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/cloudy-flashcard.jpg",
  "https://i2.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/snowy-flashcard.jpg",
  "https://i0.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/stormy-flashcard.jpg",
];

let theColor =
  "https://images-na.ssl-images-amazon.com/images/I/11npH-ZC3aL._SX331_BO1,204,203,200_.jpg";

let squaresArray = document.getElementsByTagName("img");

for (let index = 0; index < arrayImg.length; index++) {
  squaresArray[index].addEventListener("click", watchImage);
}

let counter = 0;
let firstCard = true;
let card1;
let card2;
let victories = 0;

const watchImage = (e) => {
  if (firstCard) {
    card1 = this.src = arrayImg[e.target.id];
    firstCard = false;
  } else {
    card2 = this.src = arrayImg[e.target.id];
  }
  counter = counter + 1;
  console.log(counter);
  if (counter >= 2) {
    compareImages();
    counter = 0;
    firstCard = true;
  }
};

const compareImages = () => {
  if (card1 === card2) {
    document.getElementById("message").innerHTML = "Correct!";
    document.getElementById("message").style.color = "lightgreen";
    victories++;
    document.getElementById("victories").innerHTML =
      "Number of victories: " + victories;
  } else {
    document.getElementById("message").innerHTML =
      "You have failed, try again.";
    document.getElementById("message").style.color = "red";

    setTimeout(() => {
      for (let index = 0; index < squaresArray.length; index++) {
        squaresArray[index].src =
          "https://images-na.ssl-images-amazon.com/images/I/11npH-ZC3aL._SX331_BO1,204,203,200_.jpg";
      }
    }, 1000);
  }
};
