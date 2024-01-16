export default function tabNavEvent() {
  const tabItem = document.querySelectorAll(".tab");
  const produtosTab = document.querySelectorAll(".section-produto");
  const tabContainer = document.querySelectorAll(".tab");

  function tabNavEvent(index) {
    produtosTab.forEach((itemclick) => {
      itemclick.classList.remove("on");
    });
    tabContainer.forEach((itemclick) => {
      itemclick.classList.remove("on");
    });
    produtosTab[index].classList.add("on");
    tabContainer[index].classList.add("on");
  }

  tabItem.forEach((itemClick, index) => {
    itemClick.addEventListener("click", () => {
      tabNavEvent(index);
    });
  });
}
