import React from 'react';
import './carousel.css';

import image0 from '../img/screenshots/img0.webp';
import image1 from '../img/screenshots/img1.webp';
import image2 from '../img/screenshots/img2.webp';
import image3 from '../img/screenshots/img3.webp';
import image4 from '../img/screenshots/img4.webp';
import image5 from '../img/screenshots/img5.webp';
import image6 from '../img/screenshots/img6.webp';
import image7 from '../img/screenshots/img7.webp';
import image8 from '../img/screenshots/img8.webp';

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