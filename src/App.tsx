import React from 'react';
import './App.css';
import './fonts/fonts.css';

import automateBannerSketch from './img/automate_banner.jpg';
import automateBannerImage from './img/automate_banner2.png';
import Fold from './components/fold';
import GameSection from './components/game-section';
import CallToAction from './components/call-to-action';

function App() {
  return (
    <div className='App'>
      <div className='nav-bar'>
        navbar
      </div>
      <Fold/>
      <GameSection/>
      <CallToAction/>
    </div>
  );
}

export default App;
