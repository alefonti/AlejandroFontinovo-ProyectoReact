import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';
const Categoria = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProductos().then(productos => {
            const productosCategoria = productos.filter(producto => producto[1].categoriaId === parseInt(id) )
            const cardProducto = productosCategoria.map(producto => 
                <div className="card cardProducto col-sm-2" key={producto[0]}>
                    <img src={producto[1].img} className="card-img-top" alt={producto[1].nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text">Precio: {producto[1].precio}</p>
                            <div className="btncontainer">
                                <button className='btn btn-secondary'><Link className='nav-link' to={`/producto/${producto[0]}`}>Ver Producto</Link></button>
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