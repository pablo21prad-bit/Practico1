import { cardComponent } from "../../components/card.js";

fetch("/data/productos.json")
  .then(res => res.json())
  .then(productos => {
    
    const lanchas = productos.filter(p => p.categoria === "lanchas");

    document.getElementById("contenedor-lanchas").innerHTML =
      lanchas.map(cardComponent).join("");
  })
  
