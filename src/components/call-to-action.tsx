import React from 'react';
import './call-to-action.css';
import Newsletter from './newsletter';

const CallToAction = () => {
    const presskitFilePath = '/presskit/presskit.7z';
 
    return (
        <div className='section'>
            <h1> Keep in touch </h1>
            <div className='section-container'>
                <Newsletter/>
                <div className='presskit'>
                    <h2> Presskit </h2>
                    <p className='message'>
                        Do you need information about the studio, logos and images of the games?<br/>
                        <strong>Download the presskit.</strong>It has everything you need about the studio and the games. 
                    </p>
                    <div className='presskit-button'>
                        <a href={presskitFilePath} download>
                            <button className='presskit-download-button'> DOWNLOAD SELDOON PRESSKIT </button>
                        </a>
                    </div>   
                </div>
            </div>
        </div>
    );
}

export default CallToAction;