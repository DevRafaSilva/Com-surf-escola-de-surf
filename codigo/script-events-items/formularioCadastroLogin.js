export default function formularioHeader() {
  let emailHeader = document.querySelectorAll(".email-login");
  let senhaHeader = document.querySelectorAll(".senha-login");
  let erroSpanHeader = document.querySelector(".erro-menssagem-login");
  let erroEmailLogin = document.querySelector(".erro-email-login");
  let btnLoginHeader = document.querySelector(".login-btn");
  let menssagemErroLogin = "Campo vázio";
  let emailErrado = "Formato de email invalido";
  let regexpEmail1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  function loginForm(event) {
    event.preventDefault();
    if (emailHeader[0].value === "") {
      erroSpanHeader.innerHTML = menssagemErroLogin;
    } else if (!emailHeader[0].value.match(regexpEmail1)) {
      erroEmailLogin.innerHTML = emailErrado;
      erroSpanHeader.innerHTML = "";
    } else {
      erroSpanHeader.innerHTML = "";
      erroEmailLogin.innerHTML = "";
    }
    if (senhaHeader[0].value === "") {
      erroSpanHeader.innerHTML = menssagemErroLogin;
    } else {
      erroSpanHeader.innerHTML = "";
    }
  }

  btnLoginHeader.addEventListener("click", loginForm);
}
