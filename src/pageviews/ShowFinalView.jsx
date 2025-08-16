import React from 'react';
import ShowBigScreenCard from './ShowBigScreenCard.jsx';
// import ShowMobileScreenCard from './ShowMobileScreenCard.jsx'; // optional mobile component

function FinalView() {
  return (
    <>
      <div id="main" className="fadein">
        <ShowBigScreenCard />
        {/* <ShowMobileScreenCard /> */}
      </div>
    </>
  );
}

export default FinalView;
