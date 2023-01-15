const form = document.querySelector("#form");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#telefone");
const inputMensagem = document.querySelector("#msg");

let nomeValue = nome.value;
let emailValue = email.value;
let telefoneValue = telefone.value;
let mensagemValue = msg.value;
let limpaCor = false;

const campoNome = document.querySelector("#nome");
const campoSmall = document.querySelector("small");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  verificarCaracteres();
  if (limpaCor) {
    LimpaClasse();
    limpaCor = false;
  }
  VerificarValidacao();
});

const verificarCaracteres = () => {
  console.log(nome.value);
};

const VerificarValidacao = () => {
  if (nome.value == "") {
    campoNome.classList.add("invalido");
    campoSmall.classList.add("negado");
    limpaCor = true;
  } else {
    campoNome.classList.add("valido");
    campoNome.classList.add("aprovado");
    console.log("teste");
    limpaCor = true;
  }
};

function LimpaClasse() {
  campoNome.classList.remove("invalido");
  campoSmall.classList.remove("negado");
  campoNome.classList.remove("valido");
  campoSmall.classList.remove("aprovado");
}
