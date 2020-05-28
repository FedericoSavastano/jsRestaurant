const menuR = [
  {
    id: 1,
    titulo: "Torre de panqueques",
    categoria: "desayuno",
    precio: 350.99,
    img:
      "https://images.unsplash.com/photo-1564047069572-9cc353ec7b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80",
    desc: `Panqueques sabor banana acompañados de miel o dulce de leche `,
  },
  {
    id: 2,
    titulo: "cazuela de mariscos",
    categoria: "cena",
    precio: 1500.99,
    img:
      "https://www.196flavors.com/wp-content/uploads/2018/11/cazuela-de-mariscos-2-FP.jpg",
    desc: `Con aceite de oliva, ajo y cancassa de tomate `,
  },
  {
    id: 3,
    titulo: "Bife de Lomo a la parrilla",
    categoria: "cena",
    precio: 1500.99,
    img:
      "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
    desc: `Lomo condimentado con especias y acompañado de papas rústicas `,
  },
  {
    id: 4,
    titulo: "Lemon pie",
    categoria: "postre",
    precio: 245.99,
    img:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    desc: `Crema chantilly y base de vainilla `,
  },
  {
    id: 5,
    titulo: "Pollo a las brazas",
    categoria: "cena",
    precio: 225.99,
    img:
      "https://images.unsplash.com/photo-1553162791-c1672e9ef575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
    desc: `Pieza de pollo a la parrilla, condimentado con limón y especias `,
  },
  {
    id: 6,
    titulo: "copa oreo",
    categoria: "postre",
    precio: 345.99,
    img:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80",
    desc: `Dulce de leche, crema chantilly, salsa de chocolate y galletitas oreo`,
  },
  {
    id: 7,
    titulo: "rolls de canela",
    categoria: "desayuno",
    precio: 215.99,
    img:
      "https://images.unsplash.com/photo-1567890667330-e04cbfd52af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80",
    desc: `Roll amazado con manteca y dulce de leche, bañados en chocolate y canela `,
  },
];

//VARIABLES Y CONSTANTES, elementos
const centroSecciones = document.querySelector(".centrosecciones");
const contenedorBotones = document.querySelector(".btn-contenedor");

// carga de elementos
window.addEventListener("DOMContentLoaded", function () {
  mostrarMenuItems(menuR);
  mostrarMenuBotones();
});

//FUNCIONES

function mostrarMenuItems(menuItems) {
  let mostrarMenu = menuItems.map(function (item) {
    return ` <article class="menu-item">
          <div class="photocontainer">
              <img
                  src="${item.img}"
                  class="photo"
                  alt="${item.titulo}"
              />
          </div>
          <div class="item-info">
              <header>
                  <h4 class="nombre-item">${item.titulo}</h4>
                  <h4 class="precio">$${item.precio}</h4>
              </header>
              <p class="item-texto">
                  ${item.desc}
              </p>
          </div>
      </article>`;
  });
  mostrarMenu = mostrarMenu.join("");
  centroSecciones.innerHTML = mostrarMenu;
}

function mostrarMenuBotones() {
  const categorias = menuR.reduce(
    function (values, item) {
      if (!values.includes(item.categoria)) {
        values.push(item.categoria);
      }
      return values;
    },
    ["todos"]
  );

  const categoriaBotones = categorias
    .map(function (categoria) {
      return `<button class="btnfiltro" type="button" data-id="${categoria}">
          ${categoria}
        </button>`;
    })
    .join("");

  contenedorBotones.innerHTML = categoriaBotones;

  const filtroBotones = contenedorBotones.querySelectorAll(".btnfiltro");

  filtroBotones.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const categoria = e.currentTarget.dataset.id;
      console.log(categoria);
      const menuCategoria = menuR.filter(function (menuItem) {
        if (menuItem.categoria === categoria) {
          return menuItem;
        }
      });

      if (categoria === "todos") {
        mostrarMenuItems(menuR);
      } else {
        mostrarMenuItems(menuCategoria);
      }
    });
  });
}
