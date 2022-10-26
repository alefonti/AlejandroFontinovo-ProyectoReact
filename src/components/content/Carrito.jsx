import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const prodMostrar  = carrito.map(producto => 
            <div className="card cardProducto col-sm-3 ms-5" key={producto[0]}>
                    <img src={producto[1].img} className="card-img-top" alt={producto[1].nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text">Precio: {producto[1].precio}</p>
                            <p className="card-text">Cantidad: {producto.cantidad}</p>
                            <p className="card-text">Precio Total: {producto[1].precio * producto.cantidad}</p>
                            <div className="btnCarritoContainer">
                                <button className='btn btn-secondary' onClick={() => quitarProducto(producto)}>Eliminar</button>
                            </div>                           
                    </div>
                </div>)
        setCarritoLocal(prodMostrar)
    }, [carrito]);

    let precioTotal = 0;
    const calcularPrecioTotal = carrito.map(producto => {
        let totalParcial = producto[1].precio * producto.cantidad
        precioTotal += totalParcial;
    })
    
    const app = (carrito.length != 0) ? <div className='row d-flex justify-content-center'> {carritoLocal} <p id='precioTotal'>Precio Total: {precioTotal}$</p> <div id='finalizarCompraContainer'><Link className='nav-link active' to="/checkout"><button id="finalizarCompra" className='btn btn-secondary'>Finalizar Compra</button></Link></div> </div>  : <> <div className='row d-flex justify-content-center'> <h4 id='textoCarrito'>Tu carrito se encuentra vacío</h4> <img id='carritoVacio' src="https://firebasestorage.googleapis.com/v0/b/proyectoreact-mundodachshund.appspot.com/o/Imagenes%2Fcarrito_vacio.webp?alt=media&token=f902e018-3ad2-490c-ae9c-f5f01c7df7ee" alt="Carrito vacio" />  </div></>


    return app
}

export default Carrito;