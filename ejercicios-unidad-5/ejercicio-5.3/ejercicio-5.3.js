window.onload = initialize;

function findOutLetter ()
{
let chain="TRWAGMYFPDXBNJZSQVHLCKET"
let position = document.getElementById("input-nif").value % 23
let letter = chain.substring(position,position+1)
document.getElementById("input-letter").value = letter;
return letter;
}

function initialize() {
  document.getElementById("input-nif").addEventListener("keyup", findOutLetter, false);
}