export default function carrinhoEvent() {
  let produtoEvent = document.querySelectorAll("[data-carrinho-item]");
  let addProduto = document.querySelectorAll("[data-toolti-event]");

  function addEvent(index) {
    produtoEvent.forEach(() => {});
    let carrinhoDiv = document.createElement("div");
    carrinhoDiv.classList.add("carrinho-on");
    carrinhoDiv.innerHTML = produtoEvent[index].innerHTML;
    document.querySelector(".item-carrinho").appendChild(carrinhoDiv);
  }

  addProduto.forEach((itemclick, index) => {
    itemclick.addEventListener("click", () => {
      addEvent(index);
    });
  });
}
