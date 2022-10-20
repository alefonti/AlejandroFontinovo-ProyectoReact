import React, { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
const ListContainer = ({producto}) => {

  const [cantidad, setCantidad] = useState(1);

  const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext);

  const cantProducto = (operacion) => {
    if (operacion == "+") {
      setCantidad(cantidad + 1);
    }  else {
      if (cantidad > 1 ) {
        setCantidad(cantidad - 1);
      }
    }
  }

    return (
        <>
          <div className="card cardDetalle mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
              <img src={producto[1].img} className="img-fluid rounded-start" alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{producto[1].nombre}</h5>
                  <p className="card-text">Precio: {producto[1].precio}$</p>
                  <p className='card-text'>Cantidad: {cantidad}</p> 
                  <button className='btn btn-success' onClick={() => cantProducto("-")}>-</button>
                  <button className='btn btn-secondary' onClick={() => agregarProducto(producto, cantidad)}>Agregar al Carrito</button>
                  <button className='btn btn-success' onClick={() => cantProducto("+")}>+</button>
                </div>
              </div>
            </div>
          </div>

        </>
    );
}

export default ListContainer;