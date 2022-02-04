import React from 'react';

import './game-section.css';
import automateLogo from '.././img/automate_logo.png';

const GameSection = () => {
    return(
    <div className='game-section'>
        <div className='game-card' id='product-in-action'>
            <div className='game-data-container'>
                <div className='game-data'>
                    <img src={automateLogo} className='game-logo' alt='autoMATE logo'/>
                    <p className='subtitle'> The journey of a cute little mate robot  to become autonomous ! </p>
                    <p> Soon on Gloogle Playstore </p>
                </div>
            </div>
        </div>
        <div className='game-background'>
        </div>
    </div>  
    );
}

export default GameSection;