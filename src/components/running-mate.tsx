import React from 'react';
import './running-mate.css';

const RunningMate = () => {
    return (
        <div className='automate-character'>          
            <video autoPlay={true} loop={true} muted={true}>
                <source src="https://thumbs.gfycat.com/WillingSickHylaeosaurus-mobile.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}

export default RunningMate;