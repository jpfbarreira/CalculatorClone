const input = document.getElementById("input");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const point = document.getElementById("point");
const divison = document.getElementById("division");
const multiply = document.getElementById("multiply");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const equals = document.getElementById("equals");
const number = document.querySelectorAll(".number");

let result = 0;

ac.addEventListener("click", () => {
  input.innerHTML = ``;
});

del.addEventListener("click", () => {
  if (input.textContent.split("").length == 1) {
    input.innerHTML = ` `;
  }
  fullInput = input.textContent.split("");
  deletedInput = fullInput.splice(-1);
  input.innerHTML = ``;
  for (let index = 0; index < fullInput.length; index++) {
    input.innerHTML += fullInput[index];
  }
});

point.addEventListener("click", () => {
  input.innerHTML += `.`;
});

plus.addEventListener("click", () => {
  input.innerHTML += `+`;
});

minus.addEventListener("click", () => {
  input.innerHTML += `-`;
});

divison.addEventListener("click", () => {
  input.innerHTML += `/`;
});

multiply.addEventListener("click", () => {
  input.innerHTML += `*`;
});

//function to make number buttons funcional (target.innerText gets the text of the button)
function buttonNumber() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const n = event.target.innerText;
  if (
    result != 0 &&
    !(
      input.textContent.includes("+") ||
      input.textContent.includes("*") ||
      input.textContent.includes("/") ||
      input.textContent.includes("-")
    )
  ) {
    input.innerHTML = ` `;
    result = 0;
    for (let i of numbers) {
      if (i == n) {
        input.innerHTML += n;
      }
    }
  } else if (input.textContent.includes("invalid")){
    input.innerHTML = ` `;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] == n) {
        input.innerHTML += n;
      }
    }
  } else {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] == n) {
        input.innerHTML += n;
      }
    }
  }
}

equals.addEventListener("click", () => {
  console.log(input.textContent.split("")[0])
  if (input.textContent.split("")[0] == "/"  || input.textContent.split("")[0] == "*") {
    input.innerHTML = `invalid`;
  } else {
    result = eval(input.textContent);
    if (result % 1) {
      input.innerHTML = result.toFixed(2);
    } else {
      input.innerHTML = result;
    }
  }
});
