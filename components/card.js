export const cardComponent = (producto) => {
  return `
    <div class="col">
      <div class="card h-100">

        
        <img src="${producto.img}" alt="${producto.nombre}">

        <!-- Footer-->
        <div class="card-footer">

          <!-- Nombre -->
          <h5 class="card-title mt-2">${producto.nombre}</h5>

          <!-- Descripción -->
          <p class="card-text">${producto.descripcion}</p>

          <!-- Precio + Cantidad + Agregar al carrito -->
          <div class="d-flex justify-content-between align-items-center mt-3">

            <!-- PRECIO -->
            <p class="price mb-0 fw-bold">$${producto.precio}</p>

            <!-- CANTIDAD +  BOTÓN -->
            <div class="d-flex align-items-center gap-2">

              <button 
                type="button" 
                class="btn btn-sm btn-outline-secondary">
                -
              </button>

              <span class="fw-semibold">1</span>

              <button 
                type="button" 
                class="btn btn-sm btn-outline-secondary">
                +
              </button>

              <button 
                type="button" 
                class="btn btn-sm btn-${producto.btnColor}">
                Agregar al carrito
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

