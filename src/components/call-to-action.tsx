import React from 'react';
import './call-to-action.css';

const CallToAction = () => {
    return (
        <div className='section'>
            <div className='newsletter'>
                <p className='newsletter-message'>
                    Want to know all the things? Announcements, behind the scenes, new games ?<br/>
                    <strong>Subscribe to the newsletter.</strong> No spam, no passing your email address around. 
                </p>
                <form className='newsletter-subscribe'>
                    <input type="text" name="name" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className='presskit'>
                <p className='presskit-message'>
                    Do you need information about the studio, logos and images of the games?<br/>
                    <strong>Download the presskit.</strong>It has everything you need about the studio and the games. 
                </p>
            
                <button className='presskit-download-button'> Download Seldoon presskit </button>
            </div>
        </div>
    );
}

export default CallToAction;