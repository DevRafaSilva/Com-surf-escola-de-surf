let imgEdit = document.querySelectorAll(".img-edit-container img");
let editInfo = document.querySelectorAll("[data-info-edit]");
let inputEdit = document.querySelectorAll("[data-input-edit]");
let btnEdit = document.querySelectorAll("[data-set-btnEnviar]");

function imgEditFun() {
  imgEdit.forEach((itemclick, indice) => {
    itemclick.addEventListener("click", () => {
      console.log(editInfo[indice].innerHTML);
      inputEdit.forEach((itemClick) => {
        itemClick.classList.remove("ativo");
        inputEdit[indice].classList.add("ativo");
        btnEdit.forEach((itemEdit) => {
          itemEdit.classList.remove("ativo");
          btnEdit[indice].classList.add("ativo");
        });
        function keyUp() {
          inputEdit.forEach((itemClick, index) => {
            itemClick.classList.add("ativo");
            inputEdit[index].classList.remove("ativo");
            editInfo[indice].innerHTML = inputEdit[indice].value;
          });
        }

        btnEdit.forEach((itemClick) => {
          itemClick.addEventListener("click", keyUp);
        });
      });
    });
  });
}

imgEditFun();
