document.addEventListener("DOMContentLoaded", () => {
  const csvString = document.getElementById("txt");
  const displayCsvString = document.getElementById("dis");
  const submitForm = document.getElementById("subbtn");

  submitForm.addEventListener("click", (e) => {
    const inp = csvString.value;
    console.log(inp);
    displayCsvString.innerText = inp;
  });
});
