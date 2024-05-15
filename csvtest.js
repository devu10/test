const csvString = document.getElementById("txt");
const displayCsvString = document.getElementById("dis");
const submitForm = document.getElementById("subbtn");
const clearBtn = document.querySelector("#clrbtn");

let inputArr = "";
let input = "";

submitForm.addEventListener("click", () => {
  input = csvString.value;

  inputArr = input.split("\n");

  inputArr = inputArr.map((item) => item.replace(/-/g, ""));

  displayCsvString.value = inputArr.join("\n");
});

clearBtn.addEventListener("click", () => {
  csvString.value = "";
  displayCsvString.value = "";
});
