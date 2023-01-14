const form = document.querySelector("#form");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#telefone");
const inputMensagem = document.querySelector("#msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  verificarInputs();
});

function verificarInputs() {
  const nomeValue = nome.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;
  const mensagemValue = msg.value;

  if (nomeValue === "") {
    selecionarMensagemDeErro();
  } else {
    selecionarCampoAprovado();
  }
}

function selecionarMensagemDeErro() {
  const campoNome = document.querySelector("#nome");
  const campoSmall = document.querySelector("small");

  campoNome.classList.add("invalido");
  campoSmall.classList.add("negado");
}

// function selecionarCampoAprovado() {
//   const campoNome = document.querySelector("#nome");
//   const campoSmall = document.querySelector("small");

//   campoNome.classList.add("valido");
//   campoSmall.classList.add("aprovado");
// }
