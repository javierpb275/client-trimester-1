const buttonStartSayingHello = document.getElementById("start-saying-hello");
const buttonStopSayingHello = document.getElementById("stop-saying-hello");

let interval;

const startSayingHello = () => {
  interval = setInterval(() => alert("Hello"), 5000);
};

const stopSayingHello = () => {
    clearInterval(interval);
};

buttonStartSayingHello.addEventListener("click", startSayingHello);
buttonStopSayingHello.addEventListener("click", stopSayingHello);
