import React, { useContext , useEffect , useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Carrito = () => {

    const {carrito} = useContext(CarritoContext)

    const [carritoLocal, setCarritoLocal] = useState(carrito);

    useEffect(() => {
        console.log(carritoLocal)
    }, []);

    return (
        <>
            
        </>
    );
}

export default Carrito;
