import { cardComponent } from "../../components/card.js";

const autos = [
    {
        img: "https://cdn.ferrari.com/cms/network/media/img/resize/6319eb192f9a532677cbe3c4-ferrari-purosangue-social-card-intro-share?width=1080",
        nombre: "Ferrari Purosangue",
        descripcion:
            "El Ferrari Purosangue es el primer modelo de cuatro puertas y cuatro plazas de Ferrari, con un V12 de 6.5L y 725 CV, tracción integral y un chasis avanzado con equilibrio de peso cercano al 50/50.",
        precio: 120000,
        btnColor: "secondary"
    },
    {
        img: "https://hips.hearstapps.com/hmg-prod/images/ferrari-12cilindri-1-6634a6464573b.jpg?crop=0.737xw:0.734xh;0.153xw,0.130xh",
        nombre: "Ferrari 12Cilindri",
        descripcion:
            "El Ferrari 12Cilindri es un GT con motor V12 atmosférico de 6.5L y 830 CV, inspirado en el Daytona. Tiene aerodinámica activa y sistema de 4 ruedas directrices para máximo rendimiento.",
        precio: 130000,
        btnColor: "info"
    },
    {
        img: "https://cdn.ferrari.com/cms/network/media/img/resize/685e9f389f42e90021e22970-ferrari-amalfi-social-card-intro?width=1080",
        nombre: "Ferrari Amalfi",
        descripcion:
            "El Ferrari Amalfi es un GT presentado en 2025, sucesor del Ferrari Roma. Monta un V8 biturbo de 640 CV, acelera de 0 a 100 en 3.3 s y combina elegancia, tecnología y confort.",
        precio: 140000,
        btnColor: "warning"
    },
    {
        img: "https://www.carscoops.com/wp-content/uploads/2024/10/Ferrari-Roma-Spider-Tailor-Made-aa1-1024x576.jpg",
        nombre: "Ferrari Roma Spider",
        descripcion:
            "Versión descapotable del Ferrari Roma, con capota en 13.5 s, motor V8 de 620 CV, velocidad máxima de 320 km/h y diseño elegante sin perder deportividad.",
        precio: 150000,
        btnColor: "danger"
    },
    {
        img: "https://motormagazine.com.ar/wp-content/uploads/2024/09/1-Nuevo-Ford-Mustang-en-Argentina-Sept.-2024.jpg.webp",
        nombre: "Mustang",
        descripcion:
            "El Ford Mustang es un deportivo icónico tipo 'pony car' disponible con motores V8 o eléctricos Mach-E, interior moderno, pantallas táctiles y tecnología de conectividad avanzada.",
        precio: 150000,
        btnColor: "success"
    }
];

document.getElementById("contenedor-autos").innerHTML =
    autos.map(cardComponent).join("");
