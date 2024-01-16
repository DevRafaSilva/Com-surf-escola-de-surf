export default function formularioValidarInit() {
  let inputsHtml = document.querySelectorAll("[data-inputs-orcamento]");
  let btnCadastro = document.querySelector("[data-enviar-cadastro-btn]");
  let spanError = document.querySelector(".error-mensagem-span");
  let spanErrorEmail = document.querySelector(".error-email");
  let spanErrorNumberName = document.querySelector(".error-name-number");
  let spanErrorNumberSobre = document.querySelector(".error-sobre-number");
  let regexpEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  function inputValidar(event) {
    event.preventDefault();
    // INPUT NOME SE ESTIVER VAZIO
    if (inputsHtml[0].value === "") {
      inputsHtml[0].classList.add("error");
      let mensagemErrorJs = "alguns campos estão vazios";
      spanError.innerHTML = mensagemErrorJs;
    }
    // INPUT NOME SE CONTER UM NUMERO
    else if (!isNaN(inputsHtml[0].value)) {
      inputsHtml[0].value = "";
      inputsHtml[0].classList.add("error");
      let numberName = "Não pode conter números";
      spanErrorNumberName.innerHTML = numberName;
      // REMOVE OS ERROS SE ESTIVER TUDO OK
    } else {
      inputsHtml.forEach((item) => {
        item.classList.remove("error");
      });
      spanError.innerHTML = "";
      spanErrorNumberName.innerHTML = "";
    } // INPUT SOBRENOME SE ESTIVER VAZIO
    // INPUT EMAIL SE ESTIVER VAZIO
    if (inputsHtml[3].value === "") {
      inputsHtml[3].classList.add("error");
      let mensagemErrorJs = "alguns campos estão vazios";
      spanError.innerHTML = mensagemErrorJs;
      // REMOVE OS ERROS SE ESTIVER TUDO OK
    } else {
      inputsHtml.forEach((item) => {
        item.classList.remove("error");
      });
      spanError.innerHTML = "";
    } // INPUT NÚMERO SE ESTIVER VAZIO
    if (inputsHtml[4].value === "") {
      inputsHtml[4].classList.add("error");

      let mensagemErrorJs = "alguns campos estão vazios";
      spanError.innerHTML = mensagemErrorJs;
      // REMOVE OS ERROS SE ESTIVER TUDO OK
    } else if (inputsHtml[0].value === "") {
      inputsHtml[0].classList.add("error");
    } else {
      inputsHtml.forEach((item) => {
        item.classList.remove("error");
      });
      spanError.innerHTML = "";
      inputsHtml[0].classList.remove("error");
    }
    if (inputsHtml[1].value === "") {
      inputsHtml[1].classList.add("error");
    } else {
      inputsHtml[1].classList.remove("error");
    }
    if (inputsHtml[2].value === "") {
      inputsHtml[2].classList.add("error");
      let mensagemErrorJs = "alguns campos estão vazios";
      spanError.innerHTML = mensagemErrorJs;
      // INPUT EMAIL SE ESTIVER DE FORMA INVALIDA
    } else if (!inputsHtml[2].value.match(regexpEmail)) {
      inputsHtml[2].classList.add("error");
      let mensagemErrorJs = "email invalido";
      spanErrorEmail.innerHTML = mensagemErrorJs;
      // REMOVE OS ERROS SE ESTIVER TUDO OK
    } else {
      spanErrorEmail.innerHTML = "";
    }
    if (inputsHtml[3].value === "") {
      inputsHtml[3].classList.add("error");
      let mensagemErrorJs = "alguns campos estão vazios";
      spanError.innerHTML = mensagemErrorJs;
      // REMOVE OS ERROS SE ESTIVER TUDO OK
    }
    if (inputsHtml[1].value === "") {
      inputsHtml[1].classList.add("error");
      let mensagemErrorJs = "alguns campos estão vazios";
      spanError.innerHTML = mensagemErrorJs;
    }
    // INPUT SOBRENOME SE CONTER UM NUMERO
    else if (!isNaN(inputsHtml[1].value)) {
      inputsHtml[1].value = "";
      inputsHtml[1].classList.add("error");
      let mensagemErrorJs = "Não pode conter números";
      spanErrorNumberSobre.innerHTML = mensagemErrorJs;
      // REMOVE OS ERROS SE ESTIVER TUDO OK
    } else {
      inputsHtml.forEach((item) => {
        item.classList.remove("error");
      });
      spanError.innerHTML = "";
      spanErrorNumberSobre.innerHTML = "";
    }
  }
  // BOTÃO ENVIAR ATIVA A FUNÇÃO ACIMA DO FORMULARIO
  btnCadastro.addEventListener("click", inputValidar);
}

// LOGIN VALIDAR EMAIL E SENHA

let inputLogin = document.querySelectorAll(".login-form input");
let btnLogin = document.querySelector(".btn-login");
let spanLoginEmailInvalido = document.querySelector(".email-invalido");
let spanLoginSenhaInvalida = document.querySelector(".senha-pequena");
let spanLoginVazioErro = document.querySelector(".campos-vazios");
let regexpEmail2 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function validarLogin(event) {
  event.preventDefault();
  if (inputLogin[0].value === "") {
    inputLogin[0].classList.add("error");
    let errorVazio = "Os campos estão vazios";
    spanLoginVazioErro.innerHTML = errorVazio;
  } else if (!inputLogin[0].value.match(regexpEmail2)) {
    inputLogin[0].classList.add("error");
    let errorVazio = "O formato do email está invalido";
    spanLoginEmailInvalido.innerHTML = errorVazio;
  } else {
    inputLogin[0].classList.remove("error");
    spanLoginVazioErro.innerHTML = "";
    spanLoginEmailInvalido.innerHTML = "";
  }
  if (inputLogin[1].value === "") {
    inputLogin[1].classList.add("error");
    let errorVazio = "Os campos estão vazios";
    spanLoginVazioErro.innerHTML = errorVazio;
  } else if (inputLogin[1].value.length < 8) {
    inputLogin[1].classList.add("error");
    let senhaPequena = "Senha precisa ter mais de 8 dígitos";
    spanLoginSenhaInvalida.innerHTML = senhaPequena;
    spanLoginVazioErro.innerHTML = "";
  } else {
    inputLogin[1].classList.remove("error");
    spanLoginSenhaInvalida.innerHTML = "";
  }
}

btnLogin.addEventListener("click", validarLogin);
