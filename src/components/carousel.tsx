import React from 'react';
import './carousel.css';

import image0 from '../img/screenshots/img0.png';
import image1 from '../img/screenshots/img1.png';
import image2 from '../img/screenshots/img2.png';
import image3 from '../img/screenshots/img3.png';
import image4 from '../img/screenshots/img4.png';
import image5 from '../img/screenshots/img5.png';
import image6 from '../img/screenshots/img6.png';
import image7 from '../img/screenshots/img7.png';
import image8 from '../img/screenshots/img8.png';

const Carousel = () => {
    return (
        <div className='carousel'>
            <div className="slider">
                <div className="slides">
                    <div id="slide-1">
                        <img src={image0} alt='automate screenshot'/>
                    </div>
                    <div id="slide-2">
                        <img src={image1} alt='automate screenshot'/>
                    </div>
                    <div id="slide-3">
                        <img src={image2} alt='automate screenshot'/>
                    </div>
                    <div id="slide-4">
                        <img src={image3} alt='automate screenshot'/>
                    </div>
                    <div id="slide-5">
                        <img src={image4} alt='automate screenshot'/>
                    </div>
                    <div id="slide-5">
                        <img src={image5} alt='automate screenshot'/>
                    </div>
                    <div id="slide-5">
                        <img src={image6} alt='automate screenshot'/>
                    </div>
                    <div id="slide-5">
                        <img src={image7} alt='automate screenshot'/>
                    </div>
                    <div id="slide-5">
                        <img src={image8} alt='automate screenshot'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;