import { cardComponent } from "../../components/card.js";

const lanchas = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3pIpKnTZo6bSunRB0ecyNAS5F9neR4SuyQ&s",
        nombre: "Honda",
        descripcion: "La lancha Higher Level se refiere a una lancha deportiva para recreación en San Andrés, con capacidad para hasta 7 personas, equipada para paseos cómodos y seguros, mientras que el nombre Higher Level también puede referirse a yates de lujo de mayor eslora, como el yate Ferretti 94 - High Level, o al nombre de un modelo de embarcación específico como el Riva Rivale 56 Next Level, diseñado para la navegación en alta mar",
        precio: 120000,
        btnColor: "secondary"
    },
    {
        img: "https://e01-expansion.uecdn.es/assets/multimedia/imagenes/2021/01/26/16116606173065.jpg",
        nombre: "Hermes Speedster",
        descripcion: "El Hermes Speedster, de Seven Seas Yachts, es una embarcación de lujo de estilo clásico inspirada en el diseño del Porsche 356, que combina estilo, rendimiento y eficiencia. Es un runabout o lancha deportiva de motor cubierto y bajo perfil que cuenta con un interior personalizable de cuero, volante de madera y detalles retro. Su diseño de casco tiene un ángulo de entrada de \(72\) grados para ofrecer un viaje suave, además de ser eficiente en el consumo de combustible y opcionalmente ecológico al poder ser propulsado eléctricamente",
        precio: 130000,
        btnColor: "info"
    },
    {
        img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OBLDRI3KNNFXFLYBDDXSS2WKSI.jpg",
        nombre: "Tecnomar Lamborghini 63",
        descripcion: "El Tecnomar for Lamborghini 63 es un yate deportivo de lujo que une la ingeniería de Lamborghini y el diseño de yates de Tecnomar, inspirado en el superdeportivo Sian. Destaca por su diseño agresivo, construcción ligera de fibra de carbono y un potente rendimiento, con una velocidad máxima de hasta 63 nudos, gracias a sus dos motores MAN V12 de 2000 CV cada uno. Su nombre hace referencia al año de fundación de Lamborghini (1963), 20 metros de eslora (63 pies) y una velocidad máxima de 63 nudos",
        precio: 140000,
        btnColor: "warning"
    },
    {
        img: "https://pbs.twimg.com/media/BxP6r0hIQAATmWr.jpg",
        nombre: "Riva Aquariva",
        descripcion: "El Riva Aquariva es una embarcación de lujo de estilo clásico que combina diseño tradicional con tecnología moderna, manteniendo la esencia del icónico Aquarama. Se caracteriza por su elegante casco de madera, un amplio solárium en popa, capacidad para 8 invitados, y un interior que incluye un camarote y aseo. Ofrece un alto rendimiento con una velocidad de crucero de alrededor de 36 nudos y una velocidad máxima de 40 a 41,5 nudos.",
        precio: 150000,
        btnColor: "danger"
    },
    {
        img: "https://comunidadnautica.com/wp-content/uploads/2022/02/Magnum-63-progetto-refitting.jpeg",
        nombre: "Magnum Marine 38",
        descripcion: "El Magnum 38 es una lancha rápida de alta velocidad construida por Magnum Marine, famosa por su diseño versátil y rendimiento deportivo. Diseñada por Don Aronow, es más larga que modelos anteriores como el Maltese y está disponible en configuraciones como crucero abierto, de pesca o con cabina. Las embarcaciones de este modelo suelen ser cabinadas y se caracterizan por su diseño abierto y rápido, con una manga de aproximadamente 3.75 m, una eslora de 11.43 m y capacidad para 7 pasajeros.",
        precio: 150000,
        btnColor: "success"
    }
];


document.getElementById("contenedor-lanchas").innerHTML =
    lanchas.map(cardComponent).join("");
