import React from 'react';
import Secciones from '../layouts/Secciones';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/carrito">
                                    <button className='btn btn-secondary'>
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </Link>
                            </li>        
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
