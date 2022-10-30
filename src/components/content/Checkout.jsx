import React, {useContext} from 'react';
import { createOrdenCompra } from '../../utils/firebase';
import { CartContext } from '../../context/CartContext';
import { confirmacionCompra } from '../../utils/script';

const Checkout = () => {

    const datosFormulario = React.useRef();

    const {carrito, agregarProducto, quitarProducto} = useContext(CartContext)

    let precioTotal = 0;
    const calcularPrecioTotal = carrito.map(producto => {
        let totalParcial = producto[1].precio * producto.cantidad
        precioTotal += totalParcial;
    })

    const enviarFormulario = (e) => {
        e.preventDefault()
        const dataFormulario = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(dataFormulario))
        createOrdenCompra(precioTotal, Object.fromEntries(dataFormulario).nombre, Object.fromEntries(dataFormulario).apellido, Object.fromEntries(dataFormulario).email, Object.fromEntries(dataFormulario).dni, Object.fromEntries(dataFormulario).adress)
        confirmacionCompra();
    }

    

    return (
        <>
            <form onSubmit={enviarFormulario} ref={datosFormulario}>
                <div className='mb-3'>
                    <label htmlFor="nombre" className='form-label'>Nombre:</label>
                    <input type="text" className='form-control' name='nombre' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="apellido" className='form-label'>Apellido:</label>
                    <input type="text" className='form-control' name='apellido' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div>
                    <label htmlFor="card-number" className='form-label'>Numero Tarjeta de Credito:</label>
                    <input type="number" className='form-control' name='card-number' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="adress" className="form-label">Dirección:</label>
                    <input type="text" className="form-control" name="adress" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI:</label>
                    <input type="number" className="form-control" name="dni" required/>
                </div>
                <button type='submit' className='btn btn-secondary'>Finalizar Compra</button>
            </form>
        </>
    );
}

export default Checkout;
