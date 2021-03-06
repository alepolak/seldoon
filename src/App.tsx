import React, { useRef } from 'react';
import './App.css';
import './fonts/fonts.css';

import Fold from './components/fold';
import GameSection from './components/game-section';
import CallToAction from './components/call-to-action';
import Gameplay from './components/gameplay';
import YoutubeVideo from './components/youtube-video';
import Social from './components/social';

function App() {

  const gameSectionRef = useRef<React.RefObject<HTMLDivElement> | null>(null);

  return (
    <div className='App'>
      <div className='nav-bar'>
        navbar
      </div>
      <Fold/>
      <GameSection/>
      <YoutubeVideo embedId="0PIbLvVxEVc" />
      <Social/>
      <Gameplay/>
      <CallToAction/>
    </div>
  );
}

export default App;
