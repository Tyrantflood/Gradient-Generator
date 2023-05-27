const firstColor = document.querySelector("#color-a");
const secondColor = document.querySelector("#color-b");
let currentDirection = "to bottom"; // Changed 'const' to 'let' for reassignment
const output = document.querySelector("#code");

function setDirection(value, _this) {
  const direction = document.querySelectorAll(".buttons button");
  for (let i of direction) {
    i.classList.remove("active");
  }
  _this.classList.add("active");
  currentDirection = value;
}

function generateCode() {
  output.value = `background-image: linear-gradient(${currentDirection} ${firstColor.value}, ${secondColor.value})`;
  document.getElementsByTagName(
    "body"
  )[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value})`;
}

function copyText() {
  output.select();
  document.execCommand("copy");
  alert("Gradient Copied!");
}

generateCode();
