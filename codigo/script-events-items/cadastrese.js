export default function cadastreseEvent(){
    const loginLink = document.querySelector("[data-cadastrese-link]")
    const cadastreseSection = document.querySelector("[data-cadastrese-container]")
    const cadastreseContainer = document.querySelector("[data-cadastrese]")
    const btnCadastrese = document.querySelector("[data-cadastrese-fechar]")

    document.addEventListener("click",(event)=>{
        if(loginLink.contains(event.target)){
            event.preventDefault()
            cadastreseSection.classList.toggle("ativo")
        }else if(!cadastreseContainer.contains(event.target)){
            cadastreseSection.classList.remove("ativo")
        }
    })

    function fecharLogin(){
        cadastreseSection.classList.remove("ativo")
    }

    btnCadastrese.addEventListener("click",fecharLogin)
}