import React, { useEffect } from 'react';

const SPLASH_TEXT = 'Your Vision, Our Mission!';

function ShowLogoFirst() {
  const letters = Array.from(SPLASH_TEXT);

  useEffect(() => {
    const el = document.querySelector('.ml1');
    if (el) setTimeout(() => el.classList.add('visible'), 50);
  }, []);

  return (
    <>
      <div id="main-first" className="fadeout">
        <div className="centeredContent">
          <h1 className="ml1 text-white" style={{ opacity: 1 }}>
            <span className="text-wrapper text-white">
              <span className="line line1" style={{ animationDelay: '0s' }}></span>
              <span className="letters">
                {letters.map((ch, i) => (
                  <span
                    key={i}
                    className="letter"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
              <span className="line line2" style={{ animationDelay: `${letters.length * 0.04 + 0.1}s` }}></span>
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default ShowLogoFirst;
