export default function TooltipEvent() {
  const tootlTipContainer = document.querySelectorAll("[data-toolti-event]");

  tootlTipContainer.forEach((itemMouse) => {
    itemMouse.addEventListener("mouseover", onmouseover);
  });

  function onmouseover(event) {
    const tooltipbox = criarTooltipBox(this);
    this.addEventListener("mousemove", onmousemove);
    onmousemove.tooltipbox = tooltipbox;
    this.addEventListener("mouseleave", onmouseleave);
    onmouseleave.tooltipbox = tooltipbox;
  }

  const onmouseleave = {
    tooltipbox: "",
    element: "",
    handleEvent() {
      this.tooltipbox.remove();
    },
  };

  const onmousemove = {
    handleEvent(event) {
      this.tooltipbox.style.top = event.pageY + 20 + "px";
      this.tooltipbox.style.left = event.pageX + 20 + "px";
    },
  };

  function criarTooltipBox(element) {
    const tooltipbox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipbox.classList.add("tooltipbox");
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);
    return tooltipbox;
  }
}
