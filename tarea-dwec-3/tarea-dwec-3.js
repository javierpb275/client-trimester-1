const exercise1button = document.getElementById("exercise-1-button");
const exercise2button = document.getElementById("exercise-2-button");

const varToString = (variable) => Object.keys(variable)[0];

const createListElement = (theWindow, theUl, data) => {
  let li = theWindow.createElement("li");
  const theVar = varToString({ data });
  if (theVar === "URL") {
    li.appendChild(theWindow.document.createTextNode(`complete url: ${data}`));
  } else if (theVar === "protocol") {
    li.appendChild(theWindow.document.createTextNode(`protocol: ${data}`));
  } else if (theVar === "browser") {
    li.appendChild(theWindow.document.createTextNode(`browser: ${data}`));
  } else if (theVar === "isJavaEnable") {
    li.appendChild(
      theWindow.document.createTextNode(`Java ${data} in this window`)
    );
  } else {
    return alert("wrong info!");
  }

  theUl.appendChild(li);
};

const exercise1 = () => {
  const exercise1Window = window.open(
    "./exercise1.html",
    "no redimensional window",
    "width=1200,height=1000,resizable=false"
  );

  const URL = exercise1Window.location.href;
  const protocol = exercise1Window.location.protocol;
  const browser = exercise1Window.navigator;
  const isJavaEnable = exercise1Window.navigator.isJavaEnable()
    ? " IS "
    : " IS NOT ";

  exercise1Window.document.write("<h3>New Window Example</h3>");
  exercise1Window.document.write("<br>");
  exercise1Window.document.writeln(`URL: ${URL}`);
  exercise1Window.document.write("<br>");
  exercise1Window.document.writeln(`PROTOCOL: ${protocol}`);
  exercise1Window.document.write("<br>");
  exercise1Window.document.writeln(`BROWSER: ${browser}`);
  exercise1Window.document.write("<br>");
  exercise1Window.document.writeln(`JAVA ${isJavaEnable} ENABLE`);
  exercise1Window.document.write("<br>");
  exercise1Window.document.write(`<iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="800"
      height="600"
      src="https://www.google.es/"
    >
    </iframe>`);
};

const exercise2 = () => {};

exercise1button.addEventListener("click", exercise1);
exercise2button.addEventListener("click", exercise2);
