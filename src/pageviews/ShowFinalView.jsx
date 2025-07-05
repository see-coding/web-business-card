import React from 'react';
import ShowBigScreenCard from './ShowBigScreenCard';
//import ShowMobileScreenCard from '../pageviews/ShowMobileScreenCard';

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
