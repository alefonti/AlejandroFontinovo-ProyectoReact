import React, { createContext , useState } from 'react';


const CarritoContext = createContext();
const CarritoProvider = (props) => {

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
        let indice = aux.findIndex(producto => producto[0] == prod.id);
        aux.splice(indice, 1);
        setCarrito(structuredClone(aux))
        console.log(carrito)
    }

    return (
        <div>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto}}>
                {props.children}
            </CarritoContext.Provider>
        </div>
    );
}

export {CarritoContext, CarritoProvider};
