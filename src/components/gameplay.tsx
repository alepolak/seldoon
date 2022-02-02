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
            <ScrollContainer className="scroll-container"
                vertical={false}
                horizontal={true}
                hideScrollbars={true}
                nativeMobileScroll={true}
            >
                <img src={img1} alt='menu screenshot' className='screenshot'/>
                <img src={img1} alt='menu screenshot' className='screenshot'/>
                <img src={img1} alt='menu screenshot' className='screenshot'/>
                <img src={img1} alt='menu screenshot' className='screenshot'/>
                <img src={img1} alt='menu screenshot' className='screenshot'/>
                <img src={img1} alt='menu screenshot' className='screenshot'/>
                <img src={img1} alt='menu screenshot' className='screenshot'/>
                <img src={img1} alt='menu screenshot' className='screenshot'/>
                <img src={img1} alt='menu screenshot' className='screenshot'/>
            </ScrollContainer>
        </div>
    );
}

export default Gameplay;