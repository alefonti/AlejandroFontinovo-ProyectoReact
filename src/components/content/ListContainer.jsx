import React from 'react';

const DetalleProducto = ({producto}) => {
    return (
        <>
          <div className="card cardDetalle mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`../../img/${producto.img}`} className="img-fluid rounded-start" alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">Precio: {producto.precio}$</p>
                  <button className='btn btn-secondary'>Agregar al Carrito</button>
                </div>
              </div>
            </div>
          </div>

        </>
    );
}

export default DetalleProducto;