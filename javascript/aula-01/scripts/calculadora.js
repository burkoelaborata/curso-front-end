let input = document.getElementById("input");

function appendValue(value) {
  input.value += value;
}

function calculate() {
  input.value = eval(input.value);
}

function clearInput() {
  input.value = "";
}
