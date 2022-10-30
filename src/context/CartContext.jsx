import React, { createContext , useState } from 'react';


const CartContext = createContext();
const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]); 

    const agregarProducto = (prod, cant) => {
        const aux = carrito;
        let indice = aux.findIndex(producto => producto[0] == prod[0]);
        console.log(indice);
        if (indice != -1) {
            aux[indice].cantidad = cant
        } else {
            const prodCarrito = {...prod, cantidad: cant}
            aux.push(prodCarrito);
        }
        setCarrito(structuredClone(aux))
        console.log(carrito)
    }


    const quitarProducto = (prod) => {
        const aux = carrito;
        let indice = aux.findIndex(producto => producto[0] == prod[0]);
        aux.splice(indice, 1);
        setCarrito(structuredClone(aux))
        console.log(carrito)
    }

    return (
        <div>
            <CartContext.Provider value={{carrito, agregarProducto, quitarProducto}}>
                {props.children}
            </CartContext.Provider>
        </div>
    );
}

export {CartContext, CartProvider};
