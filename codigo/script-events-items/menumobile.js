export default function menumobile(){

    const MenuMobileContainer = document.querySelector(".links-nav")
    const MenuMobile = document.querySelector(".menu-mobile")

    document.addEventListener("click",(event)=>{
        if(MenuMobile.contains(event.target)){
            MenuMobileContainer.classList.toggle("ativo")
        }else if(!MenuMobileContainer.contains(event.target)){
            MenuMobileContainer.classList.remove("ativo")
        }
    })
}