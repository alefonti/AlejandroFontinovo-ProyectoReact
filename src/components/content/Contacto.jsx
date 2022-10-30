import React from 'react';
import {confirmacionContacto} from '../../utils/script.js';

const Contacto = () => {

    const datosFormulario = React.useRef()

    const consultarForm = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datForm))
        confirmacionContacto()
    }


    return (
        <>
            <form onSubmit={consultarForm} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                    <textarea name="consulta" rows={10} cols={50}/>
                </div>       
                <button type="submit" className="btn btn-secondary">Enviar Formulario</button>
            </form>
        </>
    );
}

export default Contacto;
