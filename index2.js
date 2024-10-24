const btn = document.querySelector(".button");
const showResult = document.querySelector(".result");
const input = document.querySelector(".inputValue");

btn.addEventListener("click", function () {
  showResult.innerHTML = "";
  let inputValue = Number(input.value);
  if (!inputValue) {
    showResult.classList.add("color");
    showResult.innerHTML = `Please Enter a valid  Number`;
  } else {
    for (let i = 1; i <= 10; i++) {
      showResult.classList.remove("color");
      if ((i = 2 || 4 || 6 || 8 || 10)) {
        showResult.classList.reremoov("diferent_1");
      }
      showResult.innerHTML += `${inputValue} x ${i} = ${inputValue * i} <br/>`;
    }
  }
});
