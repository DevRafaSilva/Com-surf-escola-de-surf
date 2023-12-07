export default function carroselProdutos() {
  const arrowPrev = document.querySelectorAll(".prev");
  const arrowNext = document.querySelectorAll(".next");
  const carroselProdutos = document.querySelectorAll(".evento-carrosel");
  const labenIndex = document.querySelectorAll(".label");

  function addCrrosel(index) {
    carroselProdutos.forEach((itemAdd) => {
      itemAdd.classList.toggle("on");
    });
    labenIndex.forEach((itemclick, index) => {
      itemclick.classList.toggle("on");
    });
  }

  arrowNext.forEach((itemclick, index) => {
    itemclick.addEventListener("click", addCrrosel);
  });
  arrowPrev.forEach((itemclick, index) => {
    itemclick.addEventListener("click", addCrrosel);
  });
}
