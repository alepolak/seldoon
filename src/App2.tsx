import React from 'react';
import './App.css';
import './fonts/fonts.css';

import automateBannerImage from './img/automate_banner.jpg';
import automateBannerImage2 from './img/automate_banner2.png';
import seldoonLogoWhite from './img/seldoon_logo_white.png';

function App() {
  const showSocialProof = false;
  const storeSocialProof = showSocialProof ? <div className='headline-social-proof'> 10/10 would recomend </div> : '';

  const showLogo = false;
  const logo = showLogo ? <img className='logo' src={seldoonLogoWhite} alt='Seldoon logo'/> : '';
  return (
    <div className='App'>
      <div className='nav-bar'>
        navbar
      </div>
      <div className='outer'>
        <div className='inner'>
          <div className='headline'>
            <header className='header'>
              <div className='header-titles'>
                <h1 className='title'> SELDOON</h1>
                <h3 className='subtitle'> We are the makers of the autoMATE </h3>
              </div>
            </header>
            {storeSocialProof}
            <div className='headline-call-to-action'>
              <a href="product-in-action">
                <button className='headline-button' type="button"><b>Check our games !</b></button>
              </a>
            </div>
          </div>
          <div className='product-in-action'>
            <img className='banner' src={automateBannerImage2} alt='autoMATE banner'/>
          </div>      
          <div className='call-to-action'>
            call to action
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
