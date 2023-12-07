export default function carrinhoEvent() {
  const produtoEvent = document.querySelector("[data-carrinho-item]");
  const addProduto = document.querySelectorAll("[data-toolti-event]");
  const carrinhBlock = document.querySelector(".carrinho-section");
  const containerCarrinhoItem = document.querySelectorAll(".item-carrinho");

  function addEvent(index) {
    console.log((produtoEvent.innerHTML = containerCarrinhoItem));
    carrinhBlock.classList.add("on");
  }

  addProduto.forEach((itemclick, index) => {
    itemclick.addEventListener("click", () => {
      addEvent(index);
    });
  });
}
