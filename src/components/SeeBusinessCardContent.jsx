import React from 'react';
import '../layouts/Styles/fadeout.css';
import '../layouts/Styles/fadein.css';
import ShowLogoFirst from '../pageviews/ShowLogoFirstView.jsx';
import FinalView from '../pageviews/ShowFinalView.jsx';
import AnimatedFontsBackground from '../layouts/Backgrounds/AnimatedFontsBackground.jsx';

function SeeBusinessCardContent() {
  return (
    <>
      <div id="app" className="customoverlay-light">
        <AnimatedFontsBackground />
        <div id="hero" className="contentBusinessCard customoverlay-light">
          <ShowLogoFirst />
          <FinalView />
        </div>
      </div>
    </>
  );
}

export default SeeBusinessCardContent;
