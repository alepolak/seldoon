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
            <a href="mailto:alexispolak@gmail.com" target="_blank">
                <img className="social-icon" src={mailIcon} alt='mail icon'/>
            </a>
            <a href="https://www.twitter.com/alexispolak/" target="_blank">
                <img className="social-icon" src={twitterIcon} alt='twitter icon'/>
            </a>
            <a href="https://www.instagram.com/alexispolak/" target="_blank">
                <img className="social-icon" src={instagramIcon} alt='instagram icon'/>
            </a>
            <a href="https://www.youtube.com/alexispolak/" target="_blank">
                <img className="social-icon" src={youtubeIcon} alt='youtube icon'/>
            </a>
            <a href="https://www.tiktok.com/alexispolak/" target="_blank">
                <img className="social-icon" src={tiktokIcon} alt='tiktok icon'/>
            </a>
        </div>
    );
}

export default Social;


