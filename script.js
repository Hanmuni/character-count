let textarea = document.querySelector("#text");
let amount = document.querySelector("#amount");

textarea.addEventListener("input", () => {
  amount.textContent = textarea.value.length;
});
