import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/script';
const Categoria = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.categoriaId === parseInt(id) )
            const cardProducto = productosCategoria.map(producto => 
                <div className="card cardProducto col-sm-2" key={producto.id}>
                    <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Stock: {producto.stock}</p>
                            <div className="btncontainer">
                                <button className='btn btn-secondary'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                            </div>
                    </div>
                </div>)
            
            setProductos(cardProducto)
        })
    }, [id]);
    return (
        <div className="row d-flex justify-content-center">
            {productos}
        </div>
            
        
    );
}

export default Categoria;