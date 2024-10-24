// increament and decreament
const btn_increament = document.querySelector(".btn_increament");
const btn_Decreament = document.querySelector(".btn_dicreament");
const result_InDic = document.querySelector(".result_InDic");
// change color
const colorInput = document.querySelector(".colorInput");
const btn_ChangeColor = document.querySelector(".changeColor");
const styleColor = document.querySelector(".styleColor");
// validation Check
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn_Login = document.querySelector(".login");
// multiply useing for loop
const btn = document.querySelector(".button");
const showResult = document.querySelector(".result");
const input = document.querySelector(".inputValue");
// console.log("s: ", btn, "d: ", showResult, "j :", input);

// multiply using for loop

btn.addEventListener("click", function () {
  showResult.innerHTML = "";
  let inputValue = Number(input.value);
  if (!inputValue) {
    showResult.classList.add("text-danger");
    showResult.innerHTML = `Please Enter a valid  Number`;
  } else {
    for (let i = 1; i <= 10; i++) {
      showResult.classList.remove("text-danger");

      showResult.innerHTML += `${inputValue} x ${i} = ${inputValue * i} <br/>`;
    }
  }
});

// validation Check
btn_Login.addEventListener("click", handleValidation);
function handleValidation() {
  let requiredEmail = document.querySelector(".required_email");
  let requiredPassword = document.querySelector(".required_password");
  requiredEmail.innerHTML = "";
  requiredPassword.innerHTML = "";
  if (!email.value) {
    requiredEmail.innerHTML = ` Please Eneter Your Email`;
  }
  if (!password.value) {
    requiredPassword.innerHTML = ` Please Eneter Your Password`;
  }
}

// change color
btn_ChangeColor.addEventListener("click", rgbColor);

function rgbColor() {
  let r = Math.random() * 244;
  let red = Math.round(r);
  let b = Math.random() * 244;
  let blue = Math.round(b);
  let g = Math.random() * 244;
  let green = Math.round(g);
  styleColor.style.background = `rgb(${red} ${blue} ${green})`;
}

// increament
btn_increament.addEventListener("click", function () {
  let result = Number(result_InDic.innerHTML);
  if (result < 10) {
    result_InDic.innerHTML = result + 1;
  }
});
// decreament
btn_Decreament.addEventListener("click", function () {
  let result = Number(result_InDic.innerHTML);
  if (result > 0) {
    result_InDic.innerHTML = result - 1;
  }
});
