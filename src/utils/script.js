import Swal from 'sweetalert2';

function confirmacionContacto() {
    Swal.fire({
        title: 'Hemos recibido tu mensaje.',
        text: 'Te contactaremos en la brevedad',
        icon: 'success'
    })
    setTimeout(() => {
        window.location.replace("/")
    }, 2000)   
}

function confirmacionCompra() {
    Swal.fire({
        title: 'Compra confirmada',
        text: 'Te enviaremos la orden de compra a tu correo electronico',
        icon: 'success'
    })
    setTimeout(() => {
        window.location.replace("/")
    }, 2000) 
}

export {confirmacionContacto, confirmacionCompra}