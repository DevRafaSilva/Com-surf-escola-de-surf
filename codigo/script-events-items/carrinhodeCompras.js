export default function carrinhoEvent() {
  const produtoEvent = document.querySelector(".conteudo-item-produtos");
  const addProduto = document.querySelectorAll("[data-toolti-event]");

  function addEvent(index) {
    console.log(produtoEvent.innerText[index]);
  }
  git;
  g;

  addProduto.forEach((itemclick, index) => {
    itemclick.addEventListener("click", () => {
      addEvent(index);
    });
  });
}
