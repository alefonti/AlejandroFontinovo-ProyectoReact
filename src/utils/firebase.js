import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "proyectoreact-mundodachshund.firebaseapp.com",
    projectId: "proyectoreact-mundodachshund",
    storageBucket: "proyectoreact-mundodachshund.appspot.com",
    messagingSenderId: "89415207472",
    appId: "1:89415207472:web:bfb33682db4970b672fbf5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore()

  const cargarBaseDeDatos = async () => {
    const response = await fetch('../json/productos.json');
    const productos = await response.json();
    console.log(productos)
    productos.forEach(async (producto) => {
      await addDoc(collection(db, "productos"), {
        nombre: producto.nombre,
        precio: producto.precio,
        img: producto.img,
        categoriaId: producto.categoriaId
      })
    })
  }

  const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    console.log(prod)
    return prod
  }
  
  const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
  }
  
  export {cargarBaseDeDatos, getProductos, getProducto}