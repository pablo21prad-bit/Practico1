import { cardComponent } from "../../components/card.js";

fetch("/data/productos.json")
  .then(res => res.json())
  .then(productos => {
    
    const motos = productos.filter(p => p.categoria === "motos");

    document.getElementById("contenedor-motos").innerHTML =
      motos.map(cardComponent).join("");
  })
  