export default function loginEvent() {
  let inputsEmail = document.querySelectorAll("#emailLogin");
  let inputsSenha = document.querySelectorAll("#senhalogin");
  let btnLogin = document.querySelector(".login-btn");
  let cadastreseNone = document.querySelector("[data-cadastrese-link]");
  let cadastreseLoginNone = document.querySelector("[data-login-link]");
  let contaBlock = document.querySelector(".conta-principal");
  let erroSenhaInvalido = document.querySelector(".erro-invalido-senha-login");
  let emailEmBranco = document.querySelector(".erro-email-login");
  let senhaEmBranco = document.querySelector(".erro-menssagem-login");
  let btnFecharLogin = document.querySelector(".btn-fechar");
  let loginContainer = document.querySelector(".login-section");

  function Logar() {
    fetch("../APILogin.json")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((item) => {
          if (inputsEmail[0].value === "") {
            emailEmBranco.innerHTML = "campo vazio";
          } else if (inputsEmail[0].value == item.email) {
          } else {
          }
          if (inputsSenha[0].value === "") {
            senhaEmBranco.innerHTML = "Campo vazio";
          } else if (inputsSenha[0].value === item.senha) {
            erroSenhaInvalido.innerHTML = "";
          } else {
            let senhaInvalida = "A senha está invalida";
            erroSenhaInvalido.innerHTML = senhaInvalida;
          }
          if (
            inputsEmail[0].value == item.email &&
            inputsSenha[0].value === item.senha
          ) {
            cadastreseNone.style.display = "none";
            cadastreseLoginNone.style.display = "none";
            contaBlock.classList.add("ativo");
            loginContainer.classList.add("none");
          }
        });
      });
  }
  btnLogin.addEventListener("click", Logar);

  function limparMenssagens() {
    erroSenhaInvalido.innerHTML = "";
    emailEmBranco.innerHTML = "";
    senhaEmBranco.innerHTML = "";
    inputsEmail[0].value = "";
    inputsSenha[0].value = "";
  }

  btnFecharLogin.addEventListener("click", limparMenssagens);
}
