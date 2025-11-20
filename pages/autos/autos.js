import { cardComponent } from "../../components/card.js";
import { getData, setData, removeData } from "../../utils/localStorage.controller.js";


let productosAutos = [];   // acá guardamos los autos que vienen del JSON
const contenedorAutos = document.getElementById("contenedor-autos");
const KEY_CARRITO = "carrito"




// 1) Traer productos del JSON y dibujar las cards
fetch("../../data/productos.json")

  .then(res => res.json())
  .then(productos => {
    productosAutos = productos.filter(p => p.categoria === "autos");

    contenedorAutos.innerHTML = productosAutos
      .map(cardComponent)
      .join("");
  });

// 2) Manejar clicks dentro del contenedor 
contenedorAutos.addEventListener("click", (e) => {
  const btn = e.target;

  // SUMAR cantidad
  if (btn.classList.contains("btn-sumar")) {
    const id = btn.dataset.id;
    const span = document.getElementById(`cantidad-${id}`);
    let cant = parseInt(span.textContent);
    span.textContent = cant + 1;
  }

  // RESTAR cantidad
  if (btn.classList.contains("btn-restar")) {
    const id = btn.dataset.id;
    const span = document.getElementById(`cantidad-${id}`);
    let cant = parseInt(span.textContent);
    if (cant > 1) {
      span.textContent = cant - 1;
    }
  }

  // AGREGAR AL CARRITO
  if (btn.classList.contains("btn-carrito")) {
    const id = parseInt(btn.dataset.id);

    const producto = productosAutos.find(p => p.id === id);
    if (!producto) return;

    const span = document.getElementById(`cantidad-${id}`);
    const cantidad = parseInt(span.textContent);

    // Traer carrito actual
    const carrito = getData(KEY_CARRITO); // [] si no hay nada

    // Ver si el producto ya está en el carrito
    const index = carrito.findIndex(item => item.id === id);

    if (index !== -1) {
      // ya existe → sumo cantidad
      carrito[index].cantidad += cantidad;
    } else {
      // no existe → lo agrego
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        categoria: producto.categoria,
        cantidad: cantidad
      });
    }

    // Guardar carrito actualizado
    setData(KEY_CARRITO, carrito);

    alert("Producto agregado al carrito");
  }
});
