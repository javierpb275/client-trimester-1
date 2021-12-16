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
    case "Maria":
    case "Carlota":
    case "Ana":
    case "Martina":
    case "Claudia":
      alert("She's called");
      break;
    default:
      alert("Not called");
      break;
  }
};
