const csvString = document.getElementById("txt");
const displayCsvString = document.getElementById("dis");
const submitForm = document.getElementById("subbtn");
const clearBtn = document.querySelector("#clrbtn");

let inputArr = "";
let input = "";

submitForm.addEventListener("click", () => {
  input = csvString.value;

  inputArr = input.split("\n");

  displayCsvString.innerText = inputArr;
});

clearBtn.addEventListener("click", () => {
  csvString.value = "";
  displayCsvString.innerText = "";
});
