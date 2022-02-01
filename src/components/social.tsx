import React from 'react';
import './social.css';
import youtubeIcon from '../img/youtube_icon.png';
import instagramIcon from '../img/instagram_icon.png';
import mailIcon from '../img/mail_icon.png';
import tiktokIcon from '../img/tiktok_icon.png';
import twitterIcon from '../img/twitter_icon.png';

const Social = () => {
    return (
        <div className='social'> 
            <a href="https://www.instagram.com/ustwogames/" target="_blank">
                <img className="social-icon" src={mailIcon}/>
            </a>
            <a href="https://www.instagram.com/ustwogames/" target="_blank">
                <img className="social-icon" src={twitterIcon}/>
            </a>
            <a href="https://www.instagram.com/ustwogames/" target="_blank">
                <img className="social-icon" src={instagramIcon}/>
            </a>
            <a href="https://www.instagram.com/ustwogames/" target="_blank">
                <img className="social-icon" src={youtubeIcon}/>
            </a>
            <a href="https://www.instagram.com/ustwogames/" target="_blank">
                <img className="social-icon" src={tiktokIcon}/>
            </a>
        </div>
    );
}

export default Social;


