let textarea = document.querySelector("#text");
let characterNumber = document.querySelector("#character");
let wordNumber = document.querySelector("#word");

textarea.addEventListener("input", () => {
  let words = text.value.split(/[\s]+/g).filter((word) => {
    return word.length;
  });

  characterNumber.textContent = textarea.value.length;

  wordNumber.textContent = words.length;
});
