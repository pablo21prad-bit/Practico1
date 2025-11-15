

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formLogin");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        
       
     window.location.href = "/pages/home/home.html";
    });
});
