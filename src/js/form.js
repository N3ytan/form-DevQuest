const form = document.querySelector("#form");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoTelefone = document.querySelector("#telefone");
const campoMensagem = document.querySelector("#msg");
const campoSmall = document.querySelector("small");
let limpaCor = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  verificarCaracteres();
  if (limpaCor) {
    limpaClasse();
    limpaCor = false;
  }

  verificarNome();
  verificarEmail();
  verificarTelefone();
  verificarMensagem();
});

let verificarCaracteres = () => {
  console.log(nome.value, email.value, telefone.value, msg.value);
};

const verificarNome = () => {
  if (nome.value == "") {
    campoNome.classList.add("invalido");
    campoSmall.classList.add("negado");
    limpaCor = true;
  } else {
    campoNome.classList.add("valido");
    limpaCor = true;
  }
};

const verificarEmail = () => {
  if (nome.value == "") {
    campoEmail.classList.add("invalido");
    campoSmall.classList.add("negado");
    limpaCor = true;
  } else {
    campoEmail.classList.add("valido");
    limpaCor = true;
  }
};

const verificarTelefone = () => {
  if (telefone.value == "") {
    campoTelefone.classList.add("invalido");
    campoSmall.classList.add("negado");
    limpaCor = true;
  } else {
    campoTelefone.classList.add("valido");
    limpaCor = true;
  }
};

const verificarMensagem = () => {
  if (msg.value == "") {
    campoMensagem.classList.add("invalido");
    campoSmall.classList.add("negado");
    limpaCor = true;
  } else {
    campoMensagem.classList.add("valido");
    limpaCor = true;
  }
};

function limpaClasse() {
  campoNome.classList.remove("invalido");
  campoSmall.classList.remove("negado");
  campoNome.classList.remove("valido");

  campoEmail.classList.remove("invalido");
  campoSmall.classList.remove("negado");
  campoEmail.classList.remove("valido");

  campoTelefone.classList.remove("invalido");
  campoSmall.classList.remove("negado");
  campoTelefone.classList.remove("valido");

  campoMensagem.classList.remove("invalido");
  campoSmall.classList.remove("negado");
  campoMensagem.classList.remove("valido");
}
