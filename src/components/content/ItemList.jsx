import React, {useState, useEffect} from 'react';
import ListContainer from './ListContainer.jsx'
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/script';
const ItemList = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
       consultarBDD('../json/productos.json').then(productos => {
        const producto1 = productos.find(productoArray => productoArray.id == id)
        setProducto(producto1)
       })
   
    }, [])

    return (
            <div className='cardDetalleContainer'>
                <ListContainer producto={producto}/>
            </div>

       
    );
}

export default ItemList;
