document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    if (window.confirm("Go back to main page ?")) {
      window.location.href = "index.html";
    }
  }
});
