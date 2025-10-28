const ResetButton = document.getElementById("Reset");
const display = document.getElementById("display");
const Backspace = document.getElementById("Backspace");
const Equals = document.getElementById("Equals");
const Zero = document.getElementById("Zero");
const HistoryButton = document.getElementById("historyButton");
const operators = ["/", "*", "+", "-"];
const allButtons = document.querySelectorAll(".diplay-button");
const dot = document.getElementById("dot");
let history = [];

dot.addEventListener("click", addDot);

Equals.addEventListener("click", () => {
  calculate();
});
ResetButton.addEventListener("click", () => {
  reset();
});
Backspace.addEventListener("click", () => {
  removeNumber();
});
Zero.addEventListener("click", addZero);

HistoryButton.addEventListener("click", getHistory);

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    addToDisplay(button.textContent);
  });
});

function addToDisplay(sign) {
  const lastSign = display.value[display.value.length - 1];
  const lastValue = findLastValue();
  if (operators.includes(lastSign) && operators.includes(sign)) {
    display.value = display.value.slice(0, -1);
  }

  if (lastValue === "0" || sign === !".") {
    display.value = display.value.slice(0, -1);
  }
  display.value += sign;

  console.log(display.value.slice(0, -1));
}

function calculate() {
  const expression = display.value;
  const result = eval(display.value);

  console.log(display.value);
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "ERROR";
  }
  let operation = `${expression} = ${result}`;
  history.push(operation);
}

function reset() {
  display.value = "";
}

function removeNumber() {
  display.value = display.value.slice(0, -1);
}

function addDot() {
  const lastSign = display.value[display.value.length - 1];
  if (display.value === "" || operators.includes(lastSign)) {
    display.value += "0.";
  } else {
    const lastValue = findLastValue();

    if (!lastValue.includes(".")) {
      display.value += ".";
    }
  }
}

function addZero() {
  const lastValue = findLastValue();

  if (lastValue === "0") {
    display.value += ".0";
  } else {
    display.value += "0";
  }
}

function findLastValue() {
  const lastPlus = display.value.lastIndexOf("+");
  const lastMinus = display.value.lastIndexOf("-");
  const lastMultiply = display.value.lastIndexOf("*");
  const lastDivide = display.value.lastIndexOf("/");
  const lastOperatorIndex = Math.max(
    lastPlus,
    lastMinus,
    lastMultiply,
    lastDivide
  );

  return display.value.slice(lastOperatorIndex + 1);
}

function getHistory() {
  const historyPanel = document.getElementById("historyPanel");

  historyPanel.classList.toggle("visible");

  historyPanel.innerHTML = "";

  if (history.length === 0) {
    historyPanel.innerHTML = "<p>Brak historii.</p>";
    return;
  }

  history.forEach((entry) => {
    const historyItem = document.createElement("p");
    historyItem.textContent = entry;
    historyPanel.appendChild(historyItem);
  });
}
