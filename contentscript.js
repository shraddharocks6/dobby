console.log("Great!!");
var w = window.innerWidth;
var h = window.innerHeight;
console.log("w " + w + "  h " + h);
// Add bubble to the top of the page.
var bubbleDOM = document.createElement("div");
bubbleDOM.setAttribute("class", "selection_bubble");
document.body.appendChild(bubbleDOM);
var data;

// Lets listen to mouseup DOM events.
document.addEventListener("mouseup", function (e) {
  console.log("Target " + e.target);
  var noRedirect = ".noRedirect";
  var selection = window.getSelection().toString();
  if (!e.target.matches(noRedirect)) {
    console.log("Up");
    if (selection.length > 0) {
      var xposition, yposition;
      if (!(e.clientX + 595 <= w)) xposition = w - 610;
      else xposition = e.clientX;
      if (!(e.clientY + 400 <= h)) yposition = h - 400;
      else yposition = e.clientY;
      console.log(xposition + " x and y " + yposition);
      renderWikiBubble(xposition, yposition, selection);
    }
  } else {
    console.log("No Re");
    var wikiBtn = document.getElementById("wikiBtn");
    var translateBtn = document.getElementById("translateBtn");
    var wikidictonaryBtn = document.getElementById("wikidictonaryBtn");
    var dictonaryBtn = document.getElementById("dictonaryBtn");
    var newsBtn = document.getElementById("newsBtn");

    var frame = document.getElementById("mainFrame");
    console.log("cool");
    wikiBtn.onclick = () => {
      frame.setAttribute("src", `https://en.m.wikipedia.org/wiki/${selection}`);
    };
    translateBtn.onclick = () => {
      frame.setAttribute("src", "https://www.bing.com/translator");
    };
    wikidictonaryBtn.onclick = () => {
      frame.setAttribute(
        "src",
        `https://en.m.wiktionary.org/wiki/${selection.toLowerCase()}`
      );
    };
    dictonaryBtn.onclick = () => {
      frame.setAttribute(
        "src",
        `https://www.dictionary.com/browse/${selection.toLowerCase()}`
      );
    };
    newsBtn.onclick = () => {
      frame.setAttribute("src", `https://en.m.wikinews.org/wiki/${selection}`);
    };
  }
});

//Close the bubble when we click on the screen.
document.addEventListener("mousedown", function (e) {
  if (!e.target.matches(".noRedirect")) {
    console.log("Down");
    bubbleDOM.style.visibility = "hidden";
  }
});

// Move that bubble to the appropriate location.
function renderWikiBubble(mouseX, mouseY, selection) {
  wikiData = `
  <div id = "dobby" class="noRedirect">
      <button class="btn btn-primary noRedirect" id="wikiBtn" >Wikipedia</button>
      <button class="btn btn-primary noRedirect" id="wikidictonaryBtn" >Wiktionary</button>
      <button class="btn btn-primary noRedirect" id="dictonaryBtn" >dictionary.com</button>
      <button class="btn btn-primary noRedirect" id="newsBtn" >News - WikiNews</button>
      <button class="btn btn-primary noRedirect" id="translateBtn">Translate - Bing</button> 
      <br />

      <iframe
        src="https://en.m.wikipedia.org/wiki/${selection}"
        title="Wikipedia"
        height="400"
        width="595"
        id="mainFrame"
        class="noRedirect"
      >
    </iframe>
      <script>
          dobbySetup();
          var translateBtn = document.getElementById("translateBtn");
          var frame = document.getElementById("mainFrame");
          console.log("cool");
          translateBtn.onclick = () => {
            frame.setAttribute(
              "src",
              "https://en.m.wikipedia.org/wiki/apple"
            );
          };
      </script> 
    </div>
  `;
  bubbleDOM.innerHTML = wikiData;
  bubbleDOM.style.top = mouseY + window.scrollY - 50 + "px";
  bubbleDOM.style.left = mouseX + 10 + "px";
  bubbleDOM.style.visibility = "visible";
}

function dobbySetup() {
  dobbyDiv = document.getElementById("dobby");
}

function translate() {}
