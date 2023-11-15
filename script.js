let textarea = document.querySelector("#text");
let count = document.querySelector("#count");

textarea.addEventListener("input", () => {
  let words = text.value.split(/[\s]+/g).filter((word) => {
    return word.length;
  });
  count.textContent = `You've written ${words.length} words and ${text.value.length} characters.`;
});
