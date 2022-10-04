import React from 'react';
import Logo from '../layouts/logo.svg'
import Adopta from '../layouts/adopta.svg'

const Footer = () => {
    return (
        <footer>
            <img className='logoFooter' src={Logo} alt="Logo de Mundo Dachshund" />
            <img className='logoFooter' src={Adopta} alt="No compres, adopta" />
        </footer>
    );
}

export default Footer;
