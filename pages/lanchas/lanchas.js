import { cardComponent } from "../../components/card.js";
import { getData, setData } from "../../utils/localStorage.controller.js";

const KEY_CARRITO = "carrito";
let productosLanchas = [];

const contenedorLanchas = document.getElementById("contenedor-lanchas");

// 1) Traer productos y dibujar cards
fetch("../../data/productos.json")
  .then(res => res.json())
  .then(productos => {

    productosLanchas = productos.filter(p => p.categoria === "lanchas");

    contenedorLanchas.innerHTML = productosLanchas
      .map(cardComponent)
      .join("");
  });


// 2) Manejar clicks en las cards
contenedorLanchas.addEventListener("click", (e) => {
  const btn = e.target;

  // SUMAR cantidad
  if (btn.classList.contains("btn-sumar")) {
    const id = btn.dataset.id;
    const span = document.getElementById(`cantidad-${id}`);
    span.textContent = parseInt(span.textContent) + 1;
  }

  // RESTAR cantidad
  if (btn.classList.contains("btn-restar")) {
    const id = btn.dataset.id;
    const span = document.getElementById(`cantidad-${id}`);
    let cant = parseInt(span.textContent);
    if (cant > 1) span.textContent = cant - 1;
  }

  // AGREGAR AL CARRITO
  if (btn.classList.contains("btn-carrito")) {
    const id = parseInt(btn.dataset.id);

    const producto = productosLanchas.find(p => p.id === id);
    if (!producto) return;

    const cantidad = parseInt(document.getElementById(`cantidad-${id}`).textContent);

    let carrito = getData(KEY_CARRITO);

    const index = carrito.findIndex(item => item.id === id);

    if (index !== -1) {
      carrito[index].cantidad += cantidad;
    } else {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        categoria: producto.categoria,
        cantidad: cantidad
      });
    }

    setData(KEY_CARRITO, carrito);

    alert("Lancha agregada al carrito");
  }
});
