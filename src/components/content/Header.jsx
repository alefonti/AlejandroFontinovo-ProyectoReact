import React from 'react';
import Logo from '../layouts/logo.svg'

const Header = () => {
    return (
        <>
            <header>
                <img className='logoHeader' src={Logo} alt="Logo de Mundo Dachshund" />
            </header>  
        </>
    );
}

export default Header;
