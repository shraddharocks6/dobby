console.log("Great!!");

// Add bubble to the top of the page.
var bubbleDOM = document.createElement("div");
bubbleDOM.setAttribute("class", "selection_bubble");
document.body.appendChild(bubbleDOM);
var data;

// Lets listen to mouseup DOM events.
document.addEventListener(
  "mouseup",
  function (e) {
    console.log("Down");
    var selection = window.getSelection().toString();
    if (selection.length > 0) {
      renderBubble(e.clientX, e.clientY, selection);
    }
  },
  false
);

// Close the bubble when we click on the screen.
document.addEventListener(
  "mousedown",
  function (e) {
    console.log("Up");
    bubbleDOM.style.visibility = "hidden";
  },
  false
);

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
  console.log("Selection : " + selection);
  let html = `Hello`;
  bubbleDOM.innerHTML = html;
  bubbleDOM.style.top = mouseY + "px";
  bubbleDOM.style.left = mouseX + "px";
  bubbleDOM.style.visibility = "visible";
}
{
  /* <iframe
  src="https://en.m.wikipedia.org/wiki/${selection}" 
  title="W3Schools Free Online Web Tutorials" 
  height="600" 
  width="100%"
    ></iframe> */
}
