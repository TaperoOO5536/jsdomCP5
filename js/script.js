const form = document.querySelector("#form");

const banks = document.querySelector("#banks");
const systems = document.querySelector("#systems");
const cardNumberInput = document.querySelector("#cardNumberInput");
const nameInput = document.querySelector("#nameInput");
const monthInput = document.querySelector("#monthInput");
const yearInput = document.querySelector("#yearInput");
const cvcInput = document.querySelector("#cvcInput");
const button = document.querySelector("#button");

const bankImage = document.querySelector("#bankImage");
const cardNumber = document.querySelector("#cardNumber");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#Cvc");
const name = document.querySelector("#name");
const systemImage = document.querySelector("#systemImage");
const monthYear = document.querySelector("#monthYear");

const bottom = document.querySelector("#bottom");

function changeNumberInput(e, p) {
  e.preventDefault();
  let result = checkNumber(e.target.value);
  let newNumber = "";
  for (let i = 0; i < e.target.value.length; i++) {
    newNumber += e.target.value[i];
    if (i == 3 || i == 7 || i == 11) {
      newNumber += " ";
    }
  }
  e.target.value = result;
  p.innerHTML = newNumber;
}

function changeImg(e, image) {
  e.preventDefault();
  image.src = e.target.value;
}

function checkNumber(num) {
  if (num.length > 0) {
    let a = num.slice(num.length - 1, num.length);
    if (isNaN(parseInt(a))) {
      alert("Вы ввели букву вместо цифры");
      return num.slice(0, num.length - 1);
    } else {
      return num;
    }
  } else {
    return num;
  }
}

function changeStrInput(e, p) {
  e.preventDefault();
  p.innerHTML = e.target.value;
}

cardNumberInput.addEventListener("input", (e) => changeNumberInput(e, cardNumber));
nameInput.addEventListener("input", (e) => changeStrInput(e, name));
monthInput.addEventListener("input", (e) => changeNumberInput(e, month));
yearInput.addEventListener("input", (e) => changeNumberInput(e, year));
cvcInput.addEventListener("input", (e) => changeNumberInput(e, cvc));
banks.addEventListener("change", (e) => changeImg(e, bankImage));
systems.addEventListener("change", (e) => changeImg(e, systemImage));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    this.banks.value != "" &&
    this.systems.value != "" &&
    this.cardNumberInput.value.length == 16 &&
    parseInt(this.monthInput.value) <= 12 &&
    this.cvcInput.value.length == 3 &&
    this.yearInput.value.length == 2
  ) {
    console.log("ok");
    bottom.innerHTML += `
    <div class="resStr">
      <div class="resItem bankRes"><img src="${this.banks.value}" class="resImg"/></div>
      <div class="resItem"><img src="${this.systems.value}" class="resImg"/></div>
      <div class="resItem"><p>${cardNumber.innerHTML}</p></div>
      <div class="resItem">${monthYear.innerHTML}</div>
      <div class="resItem"><p>${cvc.innerHTML}</p></div>
      <div class="resItem"><p>${name.innerHTML}</p></div>
    </div>`;
    form.reset();
    cardNumber.innerHTML = "0000 0000 0000 0000";
    bankImage.src = "";
    month.innerHTML = "00";
    year.innerHTML = "00";
    cvc.innerHTML = "000";
    systemImage.src = "";
    name.innerHTML = "ИМЯ ФАМИЛИЯ";
  }
});
