const navElements = [

    { title: 'Home',    link: '/pages/home/home.html' },
    { title: 'autos',  link: '/pages/autos/autos.html' },
    { title: 'lanchas', link: '/pages/lanchas/lanchas.html' },
    {title: 'motos', link: '/pages/motos/motos.html' },
] 


export const navbar =  `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">CarMotors</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                ${navElements.map(element => {
                    return `
                    <li class="nav-item">
                        <a class="nav-link" href="${element.link}">${element.title}</a>
                    </li>
                    `
                }).join('')}
            </ul>

            <div class="ms-auto d-flex flex-column align-items-end gap-2">
                <a href="/pages/login/login.html" class="btn btn-primary">
                    Login
                </a>
                <a href="/pages/login/login.html" class="btn btn-danger">
                    Cerrar sesión
                </a>
            </div>
        </div>
    </div>
</nav>`;


