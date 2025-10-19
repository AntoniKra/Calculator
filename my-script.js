const Button0 = document.getElementById("Button0");
const Button1 = document.getElementById("Button1");
const Button2 = document.getElementById("Button2");
const Button3 = document.getElementById("Button3");
const Button4 = document.getElementById("Button4");
const Button5 = document.getElementById("Button5");
const Button6 = document.getElementById("Button6");
const Button7 = document.getElementById("Button7");
const Button8 = document.getElementById("Button8");
const Button9 = document.getElementById("Button9");
const Dot = document.getElementById("Dot");
const Equals = document.getElementById("Equals");
const Add = document.getElementById("Add");
const Subtract = document.getElementById("Subtract");
const Multiply = document.getElementById("Multiply");
const Divide = document.getElementById("Divide");
const ResetButton = document.getElementById("Reset");
const display = document.getElementById("display");

Button0.addEventListener("click", () => {
  addToDisplay("0");
});
Button1.addEventListener("click", () => {
  addToDisplay("1");
});
Button2.addEventListener("click", () => {
  addToDisplay("2");
});
Button3.addEventListener("click", () => {
  addToDisplay("3");
});
Button4.addEventListener("click", () => {
  addToDisplay("4");
});
Button5.addEventListener("click", () => {
  addToDisplay("5");
});
Button6.addEventListener("click", () => {
  addToDisplay("6");
});
Button7.addEventListener("click", () => {
  addToDisplay("7");
});
Button8.addEventListener("click", () => {
  addToDisplay("8");
});
Button9.addEventListener("click", () => {
  addToDisplay("9");
});
Add.addEventListener("click", () => {
  addToDisplay("+");
});
Subtract.addEventListener("click", () => {
  addToDisplay("-");
});
Divide.addEventListener("click", () => {
  addToDisplay("/");
});
Multiply.addEventListener("click", () => {
  addToDisplay("*");
});
Dot.addEventListener("click", () => {
  addToDisplay(".");
});
Equals.addEventListener("click", () => {
  calculate();
});
ResetButton.addEventListener("click", () => {
  Reset();
});

function addToDisplay(number) {
  display.value += number;
}

function calculate() {
  display.value = eval(display.value);
}

function Reset() {
  display.value = "";
}
