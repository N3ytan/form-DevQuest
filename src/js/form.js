const inputs = document.querySelectorAll(".dados");
console.log(inputs);

const campoSmall = document.querySelectorAll(".small")
console.log(campoSmall)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input, index) => {
    if (input.value === "") {
      input.classList.remove("valido")
      input.classList.add("invalido");
      campoSmall[index].classList.add("negado");
    } else {
      input.classList.add("valido");
      campoSmall[index].classList.remove("negado");

    }
  });
});

