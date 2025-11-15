import { cardComponent } from "../../components/card.js";

const motos = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Kawasaki_Ninja_1000_ABS_right-side_2011_Tokyo_Motor_Show.jpg",
        nombre: "Kawasaki Ninja",
        descripcion:
            "La Kawasaki H2 usa un motor sobrealimentado de 998 cc. La H2R llega a 326 CV y la H2 de calle a 239 CV. Chasis tubular de acero, suspensiones premium y electrónica avanzada.",
        precio: 120000,
        btnColor: "secondary"
    },
    {
        img: "https://www.motoplanete.com/mv-agusta/zoom-700px/MV-Agusta-1000-F4-Caudio-2019-700px.webp",
        nombre: "MV Agusta F4 Claudio",
        descripcion:
            "Moto deportiva de edición limitada (100 unidades). Motor 998cc de 205 CV, llantas y carenado en fibra de carbono, suspensiones Öhlins y frenos Brembo Stylema.",
        precio: 130000,
        btnColor: "info"
    },
    {
        img: "https://i.blogs.es/e997b7/ducati-panigale-v4-r-2019-005/1366_2000.jpg",
        nombre: "Ducati Panigale V4 R",
        descripcion:
            "Superbike con motor V4 de 998cc y 221 CV. Cuenta con carbono, suspensiones Öhlins de competición y frenos Brembo. Una máquina de precisión en pista y carretera.",
        precio: 140000,
        btnColor: "warning"
    }
];

document.getElementById("contenedor-motos").innerHTML =
    motos.map(cardComponent).join("");
