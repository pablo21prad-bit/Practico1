import { cardComponent } from "../../components/card.js";

fetch("/data/productos.json")
  .then(res => res.json())
  .then(productos => {
    
    const autos = productos.filter(p => p.categoria === "autos");

    document.getElementById("contenedor-autos").innerHTML =
      autos.map(cardComponent).join("");
  })
  