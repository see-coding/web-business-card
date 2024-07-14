import React from 'react';
import logoLong from '../assets/logo/logo-long.svg';

function ShowLogoFirst() {
  return (
    <>
      <div id="main-first" className="fadeout">
        <div className="centeredContent">
          <img src={logoLong} alt="logo" className="longLogoImage"/>
        </div>
      </div>  
    </>
  );
}
export default ShowLogoFirst;
