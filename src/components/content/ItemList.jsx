import React, {useState, useEffect} from 'react';
import ListContainer from './ListContainer.jsx'
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/firebase.js';
const ItemList = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProducto(id).then(prod => {
        setProducto(prod)
       })
   
    }, [])
    if (producto.length != 0) {
        return (
            <div className='cardDetalleContainer'>
                <ListContainer producto={producto}/>
            </div>
        );
    }
    
}

export default ItemList;
