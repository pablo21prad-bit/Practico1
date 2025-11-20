import { getData, setData, removeData } from "../../utils/localStorage.controller.js";

const KEY_CARRITO = "carrito";

const tabla = document.getElementById("tabla-carrito");
const totalHTML = document.getElementById("total");

// Traemos lo que está guardado
let carrito = getData(KEY_CARRITO);

// Función para dibujar la tabla
function cargarCarrito() {
    tabla.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="5" class="text-center">No hay productos en el carrito</td>
            </tr>
        `;
        totalHTML.textContent = "0";
        return;
    }

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>$${item.precio}</td>
            <td>${item.cantidad}</td>
            <td>$${subtotal}</td>
            <td><button class="btn btn-danger btn-sm btn-eliminar" data-id="${item.id}">
                Eliminar
            </button></td>
        `;

        tabla.appendChild(fila);
    });

    totalHTML.textContent = total;
}

// Click para eliminar un producto
tabla.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar")) {
        const id = parseInt(e.target.dataset.id);

        carrito = carrito.filter(item => item.id !== id);

        setData(KEY_CARRITO, carrito);
        cargarCarrito();
    }
});

cargarCarrito();

