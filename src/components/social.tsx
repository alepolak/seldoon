import React from 'react';
import './social.css';
import youtubeIcon from '../img/youtube_icon.webp';
import instagramIcon from '../img/instagram_icon.webp';
import mailIcon from '../img/mail_icon.webp';
import tiktokIcon from '../img/tiktok_icon.webp';
import twitterIcon from '../img/twitter_icon.webp';

const Social = () => {
    return (
        <div className='social'> 
            <a href="mailto:seldoongames@gmail.com" target="_blank" rel="noreferrer">
                <img className="social-icon" src={mailIcon} alt='mail icon'/>
            </a>
            <a href="https://twitter.com/SeldoonStudio" target="_blank" rel="noreferrer">
                <img className="social-icon" src={twitterIcon} alt='twitter icon'/>
            </a>
            <a href="https://www.instagram.com/seldoon/" target="_blank" rel="noreferrer">
                <img className="social-icon" src={instagramIcon} alt='instagram icon'/>
            </a>
            <a href="https://www.youtube.com/channel/UC_8yUGTNcsr1F8j4_WIvrwg/videos" target="_blank" rel="noreferrer">
                <img className="social-icon" src={youtubeIcon} alt='youtube icon'/>
            </a>
            <a href="https://www.tiktok.com/@seldoongames" target="_blank" rel="noreferrer">
                <img className="social-icon" src={tiktokIcon} alt='tiktok icon'/>
            </a>
        </div>
    );
}

export default Social;


