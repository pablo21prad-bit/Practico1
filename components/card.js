export const cardComponent = (producto) => {
    return `
        <div class="col">
            <div class="card h-100">
                <img src="${producto.img}" alt="${producto.nombre}">
                
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                </div>

                <div class="card-footer">
                    <div class="row text-center">
                        <div class="col">
                            <p class="price">$${producto.precio}</p>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-${producto.btnColor}">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};
