const getResultButton = document.getElementById("get-result-button");

const getResult = () => {
  let today = new Date().toISOString().slice(0, 10)
  setInterval(() => alert(today), 20000);
};

getResultButton.addEventListener("click", getResult);
