let input = document.getElementById("input");
let output = document.getElementById("output");
let openParen = true;
const clickSound = new Audio("click.mp3");
clickSound.volume = 0.2;

function appendValue(val) {
    clickSound.play();
  input.textContent += val;
}

function clearDisplay() {
    clickSound.play();
  input.textContent = "";
  output.textContent = "";
  openParen = true;
}

function deleteLast() {
    clickSound.play();
  input.textContent = input.textContent.slice(0, -1);
}

function appendParenthesis() {
    clickSound.play();
  input.textContent += openParen ? "(" : ")";
  openParen = !openParen;
}

function calculate() {
    clickSound.play();
  try {
    let expression = input.textContent.replace(/×/g, "*").replace(/÷/g, "/");
    output.textContent = eval(expression);
  } catch {
    output.textContent = "Error";
  }
}