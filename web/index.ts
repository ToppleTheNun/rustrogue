import "./index.css";

// handle outputting log events to web page
if (typeof console !== "undefined") {
  let oLog = console.log ? console.log : () => {};
  console.log = function (...data: any[]) {
    const logElement = document.getElementById("log");
    if (logElement) {
      const currentContents = [...logElement.getElementsByTagName("li")]
        .map((it) => it.textContent)
        .concat([...data])
        .filter((it): it is string => Boolean(it))
        .slice(-10);

      // remove all existing log entries
      while (logElement.firstChild) {
        logElement.removeChild(logElement.firstChild);
      }

      // add 10 most recent log entries
      for (const logLine of currentContents) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(logLine));
        logElement.appendChild(li);
      }
    }
    oLog(...data);
  };
}

// handle canvas resizing
const canvas = document.getElementById("canvas");
if (canvas) {
  canvas.style.height = "480px";
  canvas.style.width = "640px";
}
