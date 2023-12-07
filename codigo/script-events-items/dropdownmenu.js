export default function dropdownmenu(){
    const dropdownEvents = document.querySelector(".dropdown-container")
    const dropdownLink = document.querySelectorAll("[data-produtos]")


    function dropdownFunction(event,index){
        event.preventDefault()
        dropdownEvents.classList.toggle("ativo")

        outsideclick(this,()=>{
            dropdownEvents.classList.remove("ativo")
        })
    }

    dropdownLink.forEach((itemclick)=>{
        itemclick.addEventListener("click",dropdownFunction)
    })

    function outsideclick(event,callback){
        const html = document.documentElement
        html.addEventListener("click",handleclick)

        function handleclick(element){
            if(!event.contains(element.target)){
                callback()
            }
        }
    }
}
