import React, { useEffect } from 'react';
import '../layouts/Styles/fadeout.css';
import '../layouts/Styles/fadein.css';
import ShowLogoFirst from '../pageviews/ShowLogoFirstView'
import FinalView from '../pageviews/ShowFinalView'
import AnimatedFontsBackground from '../layouts/Backgrounds/AnimatedFontsBackground';

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
