export default function menuCarrinho(){
    const carrinhoLink = document.querySelector("[data-carrinho-de-compras]")
    const containerCarrinho = document.querySelector("[data-container-carrinho]")

    document.addEventListener("click",(event)=>{
        if(carrinhoLink.contains(event.target)){
            event.preventDefault()
            containerCarrinho.classList.toggle("ativo")
        }else if(!containerCarrinho.contains(event.target)){
            containerCarrinho.classList.remove("ativo")
        }
    })
}