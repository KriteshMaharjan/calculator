let output = document.getElementById("output");
let btn = document.querySelectorAll("button");

btn.forEach((button) => {
  button.addEventListener("click", calculate);
});

function calculate() {
  let buttonText = this.innerHTML;
  if (buttonText === "AC") {
    output.value = "";
    return;
  }
  if (buttonText === "DEL") {
    output.value = output.value.substr(0, output.value.length - 1);
    return;
  }
  if (buttonText === "=") {
    output.value = eval(output.value);
  } else {
    output.value += buttonText;
    return;
  }
}
