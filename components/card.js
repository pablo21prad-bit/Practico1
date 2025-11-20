 export const cardComponent = (producto) => {
  return `
    <div class="col">
      <div class="card h-100">

    <img src="${producto.img}" alt="${producto.nombre}">

         <div class="card-footer">
          
         <h5 class="card-title mt-2">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>

          <!-- Precio + Cantidad + Agregar al carrito -->
          <div class="d-flex justify-content-between align-items-center mt-3">

            <!-- PRECIO -->
            <p class="price mb-0 fw-bold">$${producto.precio}</p>

            <!-- CANTIDAD + BOTONES -->
            <div class="d-flex align-items-center gap-2">

              <!-- BtN RESTAR -->
              <button 
                type="button" 
                class="btn btn-sm btn-outline-secondary btn-restar"
                data-id="${producto.id}">
                -
              </button>

              <!-- CANTIDAD -->
              <span 
                class="fw-semibold"
                id="cantidad-${producto.id}">
                1
              </span>

              <!-- BOTÓN SUMAR -->
              <button 
                type="button" 
                class="btn btn-sm btn-outline-secondary btn-sumar"
                data-id="${producto.id}">
                +
              </button>

              <!-- BOTÓN AGREGAR AL CARRITO -->
              <button 
                type="button" 
                class="btn btn-sm btn-${producto.btnColor} btn-carrito"
                data-id="${producto.id}">
                Agregar al carrito
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
