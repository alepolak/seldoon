import React from 'react';
import './call-to-action.css';

const CallToAction = () => {
    return (
        <div className='section'>
            <h1> Keep in touch </h1>
            <div className='section-container'>
                <div className='newsletter'>
                    <h2> Newsletter </h2>
                    <p className='message'>
                        Want to know all the things? Announcements, behind the scenes, new games ?<br/>
                        <strong>Subscribe to the newsletter.</strong> No spam, no passing your email address around. 
                    </p>
                    <form className='newsletter-subscribe'>
                        <input className='newsletter-input' type="text" name="name" />
                        <input className='newsletter-button' type="submit" value="SUBMIT" />
                    </form>
                </div>
                <div className='presskit'>
                    <h2> Presskit </h2>
                    <p className='message'>
                        Do you need information about the studio, logos and images of the games?<br/>
                        <strong>Download the presskit.</strong>It has everything you need about the studio and the games. 
                    </p>
                    <div className='presskit-button'>
                        <button className='presskit-download-button'> DOWNLOAD SELDOON PRESSKIT </button>
                    </div>   
                </div>
            </div>
        </div>
    );
}

export default CallToAction;