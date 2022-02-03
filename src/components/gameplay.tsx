import React from 'react';
import './gameplay.css';
import ScrollContainer from 'react-indiana-drag-scroll'

import img1 from '../img/screenshots/img1.png';

const Gameplay = () => {


    const automateCharacter = '';
    return (
        <div className='gameplay'>
            <div className='automate-character'>          
                <video autoPlay={true} loop={true} muted={true}>
                    <source src="https://thumbs.gfycat.com/WillingSickHylaeosaurus-mobile.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    );
}

export default Gameplay;