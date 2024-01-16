// ADICONAR ITENS NO CARRINHO DE COMPRAS
export default function carrinhoDeCompras() {
  let addImg = document.querySelectorAll(".add-imagem");
  let NomeProduto = document.querySelectorAll("[data-nome-produto]");
  let PrecoProduto = document.querySelectorAll("[data-preco-produto]");
  let ImgProduto = document.querySelectorAll(".produto-img");
  let produtoCartConteudo = document.querySelector(".lista-produtos");
  let totalProduto = document.querySelector(".total-produto");

  let carrinho = {};

  function produtoCart() {
    addImg.forEach((itemclick, indice) => {
      itemclick.addEventListener("click", () => {
        let produtoNomeVar = NomeProduto[indice].innerHTML;
        let produtoPrecoVar = PrecoProduto[indice].innerHTML;
        let produtoImgVar = ImgProduto[indice].src;

        let produtoJaNoCarrinho = Object.values(carrinho).some(
          (produto) => produto.preco === produtoPrecoVar
        );

        if (produtoJaNoCarrinho) {
          return;
        }

        carrinho[produtoNomeVar] = {
          preco: produtoPrecoVar,
          quantidade: 1,
          imagem: produtoImgVar,
        };

        let divCreate = document.createElement("section");
        divCreate.innerHTML = `
          <div id="ContainerDivCart">
            <img id="imagemCarrinho" src="${produtoImgVar}"/>
            <div id="container-info">
              <h3>${produtoNomeVar}</h3>
              <span id="preco-carrinho">${produtoPrecoVar}</span>
              <div class="contador-de-produtos margin">
                <span id="cont-soma" data-nome="${produtoNomeVar}">+</span>
                <span id="cont-index">${carrinho[produtoNomeVar].quantidade}</span>
                <span id="cont-subtrai" data-nome="${produtoNomeVar}">-</span>
              </div>
            </div>
          </div>`;
        produtoCartConteudo.appendChild(divCreate);

        totalProduto.innerHTML = `
          ${(parseFloat(produtoPrecoVar) + parseFloat(produtoPrecoVar)).toFixed(
            3
          )} 
        `;
        let indexQunatidadeCart = document.querySelectorAll("#cont-index");
        let spanSomaId = document.querySelectorAll("#cont-soma");
        let spanSubtarirId = document.querySelectorAll("#cont-subtrai");

        function adiconarProdutos2() {
          spanSomaId.forEach((itemClick, indice) => {
            itemClick.addEventListener("click", () => {
              indexQunatidadeCart[indice].innerHTML++;
            });
          });

          spanSubtarirId.forEach((itemClick, indice) => {
            itemClick.addEventListener("click", () => {
              if (spanIndexQuant[indice].innerHTML >= 0) {
                return 0;
              } else {
                indexQunatidadeCart[indice].innerHTML--;
              }
            });
          });
        }
        adiconarProdutos2();
      });
    });
  }

  function adicionarEventosQuantidade(idSomarCart, idSubtraiCart) {
    idSomarCart.forEach((itemclick) => {
      itemclick.addEventListener("click", () => {
        let produtoNome = itemclick.getAttribute("data-nome");
        carrinho[produtoNome].quantidade++;
        atualizarCarrinho();
      });
    });

    idSubtraiCart.forEach((itemclick) => {
      itemclick.addEventListener("click", () => {
        let produtoNome = itemclick.getAttribute("data-nome");
        if (carrinho[produtoNome].quantidade > 1) {
          carrinho[produtoNome].quantidade--;

          atualizarCarrinho();
        }
      });
    });
  }

  function atualizarCarrinho() {}

  produtoCart();

  let indexQunatidadeCart = document.querySelectorAll("#cont-index");
  let spanSomaId = document.querySelectorAll("#cont-soma");
  let spanSubtarirId = document.querySelectorAll("#cont-subtrai");

  function adiconarProdutos2() {
    spanSomaId.forEach((itemClick, indice) => {
      itemClick.addEventListener("click", () => {
        indexQunatidadeCart[indice].innerHTML++;
      });
    });

    spanSubtarirId.forEach((itemClick, indice) => {
      itemClick.addEventListener("click", () => {
        if (spanIndexQuant[indice].innerHTML <= 0) {
          return 0;
        } else {
          indexQunatidadeCart[indice].innerHTML--;
        }
      });
    });
  }
  adiconarProdutos2();

  let spanSoma = document.querySelectorAll(".cont-soma");
  let spanIndexQuant = document.querySelectorAll(".cont-index");
  let spanSubtarir = document.querySelectorAll(".cont-subtrai");
  function adiconarProdutos() {
    spanSoma.forEach((itemClick, indice) => {
      itemClick.addEventListener("click", () => {
        spanIndexQuant[indice].innerHTML++;
      });
    });

    spanSubtarir.forEach((itemClick, indice) => {
      itemClick.addEventListener("click", () => {
        if (spanIndexQuant[indice].innerHTML <= 0) {
          return 0;
        } else {
          spanIndexQuant[indice].innerHTML--;
        }
      });
    });
  }

  adiconarProdutos();
}
