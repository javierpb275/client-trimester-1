function openWindow() {
  let newWindow = window.open(
    ["https://developer.mozilla.org/es/docs/Web/API/Window/open"],
    ["no redimensional window"],
    ["1000 x 800"]
  );

  newWindow.document.write("<h3>New Window Example</h3>");
  newWindow.document.write("URL: " + window.location);
  newWindow.document.write("protocol: " + location.protocol);
  newWindow.document.write("browser: " + navigator.userAgent);
  newWindow.document.write("Java Enabled: " + navigator.javaEnabled());
  newWindow.document.write(
    "<iframe id=inlineFrameExample title=Inline-Frame-Example width=800 height=600 src=https://www.google.es/> </iframe > "
  );

  document.write("<h1>TASK DWEC03</h1>");
  document.write("<form onsubmit=operations()>");
  document.write("<br><label for=number> Name and Surname: </label>");
  document.write("<input id=name type=name/> <br>");
  document.write("<br> <label for=number> birthday: </label>");
  document.write("<input id=birthday type=Bday/> <br>");
  document.write("<br> <label for=number> birthmonth: </label>");
  document.write("<input id=birthmonth type=BM/> <br>");
  document.write("<br> <label for=number> birthyear: </label>");
  document.write("<input id=birthyear type=BY/> <br>");
  document.write("<br><input type=submit value=show operations/><br>");
  document.write("</form>");
}

function calculateAge(birthday, birthmonth, birthyear) {
  let todaysDate = new Date();
  let currentYear = todaysDate.getFullYear();
  currentYear = todaysDate.getMonth();
  currentYear = todaysDate.getDate();
  let age = currentYear - birthyear;

  if (currentYear < birthmonth - 1) {
    age--;
  }
  if (birthmonth - 1 == currentYear && currentYear < birthday) {
    age--;
  }
  return age;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function operations() {
  this.event.preventDefault();

  let name = document.getElementById("name").value;
  let birthday = document.getElementById("birthday").value;
  let birthmonth = document.getElementById("birthmonth").value;
  let birthyear = document.getElementById("birthyear").value;

  document.write("<br> Good morning: " + name.split(" ")[0]);
  document.write("<br> The name is: " + name);
  document.write("<br> first A is at position: " + name.indexOf("a"));
  document.write("<br> last A is at position: " + name.lastIndexOf("a"));
  document.write("<br> name without first 3 letters: " + name.substring(3, -1));
  document.write("<br> NAME: " + name.toUpperCase());
  document.write(
    "<br> age: " + calculateAge(birthday, birthmonth, birthyear) + " años"
  );
  document.write(
    "<br> you were born a happy: " +
      birthday +
      " the " +
      birthmonth +
      " of " +
      birthyear
  );
  document.write("<br> 180 cosine: " + Math.cos(180).toFixed(2));
  document.write(
    "<br> the biggets number of (34, 67, 23, 75, 35, 19) is: " +
      Math.max(34, 67, 23, 75, 35, 19)
  );
  document.write(
    "<br> random number example: " + randomNumber(0, 100000000000)
  );
}
