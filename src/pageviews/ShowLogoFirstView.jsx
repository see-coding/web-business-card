import React, { useEffect } from 'react';
import '../layouts/Styles/anim-slogan.css';
//import '../layouts/Styles/bigscreenstyle.css';
import '../layouts/Styles/see-cardflip-style.css';
import anime from 'animejs/lib/anime.es.js';
//import '../assets/scripts/anime.js';
//import '../assets/scripts/anim-slogan.js';
//import logoLong from '../assets/logo/logo-long.svg';

function ShowLogoFirst() {
  useEffect(() => {
      // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml1 .letters');
  if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
      .add({
        targets: '.ml1 .letter',
        scale: [0.3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
      }).add({
        targets: '.ml1 .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
      }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    }
  }, []);

  return (
    <>
    <div id="main-first" className="fadeout">
      <div className="centeredContent">
        <h1 className="ml1">
          <span className="text-wrapper">
            <span className="line line1"></span>
            <span className="letters">Your Vision, our Mission!</span>
            <span className="line line2"></span>
          </span>
        </h1>
        </div>
      </div>  
    </>
  );
}
export default ShowLogoFirst;
