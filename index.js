import { navbar } from './components/navbar.js';



let navcontainer = document.querySelector(`header`);
window.addEventListener(`load`, () => {
    navcontainer.innerHTML = navbar})

const form = document.getElementById("Login");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    
    let userEmail = document.getElementById("email").value;
    let userPass = document.getElementById("pass").value;
fetch("/data/usuarios.json")
    .then(res => res.json())
    .then(usuario => {
        const usuario = usuarios.find(e=> e.email === userEmail && e.password === userPass);
        if (usuario) {
            sessionStorage.setItem("userdata", JSON.stringify(usuario));
            window.location.href = "/pages/home/home.html";
        } else {
            alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
        }
    });

})