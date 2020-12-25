const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", () => {
  // change the theme of the website
  document.body.classList.toggle("dark");
});
