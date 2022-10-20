import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { getProductos } from '../../utils/firebase';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos().then(productos => {
            const cardProducto = productos.map(producto => 
                <div className="card cardProducto col-sm-2" key={producto[0]}>
                    <img src={producto[1].img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text">Precio: {producto[1].precio}</p>
                            <div className="btncontainer">
                                <button className='btn btn-secondary '><Link className='nav-link' to={`/producto/${producto[0]}`}>Ver Producto</Link></button>
                            </div>
                        </div>
                </div>)
            
            setProductos(cardProducto)
            })
    }, []);


    return (
        <div className="row d-flex justify-content-center">
            {productos}     
        </div>      
        
    );

}

export default ItemListContainer;
