const calledPlayers = [
  "Luisa",
  "Maria",
  "Carlota",
  "Ana",
  "Martina",
  "Claudia",
];

const checkCalledPlayer1 = (player) => {
  player = player.trim().toLowerCase();
  const foundPlayer = calledPlayers.find(
    (calledPlayer) => player === calledPlayer.toLowerCase()
  );
  if (!foundPlayer) {
    alert("Not called");
  } else {
    alert("She's called");
  }
};

const checkCalledPlayer2 = (player) => {
  player = player.trim();
  switch (player) {
    case "Luisa":
      alert("She's called");
      break;
    case "Maria":
      alert("She's called");
      break;
    case "Carlota":
      alert("She's called");
      break;
    case "Ana":
      alert("She's called");
      break;
    case "Martina":
      alert("She's called");
      break;
    case "Claudia":
      alert("She's called");
      break;
    default:
      alert("Not called");
      break;
  }
};
