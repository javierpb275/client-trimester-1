const generateButton = document.getElementById("add-button");

const generateList = () => {
    for(let hour = 9; hour <= 21; hour++) {
        document.writeln(`${hour} : 00\n`);
        document.write('<br>');
        document.writeln(`${hour} : 30\n`);
        document.write('<br>');
    }
};

generateButton.addEventListener("click", generateList);
