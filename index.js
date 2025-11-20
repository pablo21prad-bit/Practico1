import { navbar } from './components/navbar.js';



let navcontainer = document.querySelector(`header`);
window.addEventListener(`load`, () => {
    navcontainer.innerHTML = navbar})

const form = document.getElementById("Login");

if (form) {

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const useremail = document.getElementById("email").value;
        const userPass  = document.getElementById("pass").value;

        fetch("/data/users.json")
            .then(res => res.json())
            .then(users => {

                const user = users.find(u =>
                    u.email === useremail && u.pass === userPass
                );

                if (user) {
                    sessionStorage.setItem("userdata", JSON.stringify(user));
                    window.location.href = "/pages/home/home.html";
                } else {
                    alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
                }
            });
    });

}
