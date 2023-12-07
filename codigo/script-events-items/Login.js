export default function loginEvent(){
    const loginLink = document.querySelector("[data-login-link]")
    const loginSection = document.querySelector("[data-login-section]")
    const loginContainer = document.querySelector("[data-container]")
    const btnLogin = document.querySelector("[data-btn-fechar]")

    document.addEventListener("click",(event)=>{
        if(loginLink.contains(event.target)){
            event.preventDefault()
            loginSection.classList.toggle("ativo")
        }else if(!loginContainer.contains(event.target)){
            loginSection.classList.remove("ativo")
        }
    })

    function fecharLogin(){
        loginSection.classList.remove("ativo")
    }

    btnLogin.addEventListener("click",fecharLogin)

}