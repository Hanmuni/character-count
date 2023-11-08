let blabla = document.querySelector("#text");
let amount = document.querySelector("#amount");

blabla.addEventListener("input", () => {
  if (blabla.value) {
    amount.textContent = text.value.length;
  }
});
