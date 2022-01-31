import React from 'react';
import './fold.css';
import seldoonLogoWhite from '.././img/seldoon_logo_white.png';
import Stars from './stars';


const Fold = () => {
    return (
        <div className='fold'>
            <Stars/>
            <div className='headline'>
            <header className='header'>
                <img className='logo' src={seldoonLogoWhite} alt='Seldoon logo'/>
                <h1> SELDOON</h1>
            </header>
            <a className='headline-button-link' href="product-in-action">
                <button className='headline-button' type="button"><b>Check our game !</b></button>
            </a>
            </div>
        </div> 
    );
}

export default Fold;