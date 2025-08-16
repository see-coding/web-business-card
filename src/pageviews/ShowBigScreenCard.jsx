import React from 'react';
import { useState } from 'preact/hooks';
import '../layouts/Styles/bigscreenstyle.css';
import logoLong from '../assets/logo/logo-long.svg';

function ShowBigScreenCard() {
  const [rotated, setRotated] = useState(false);

  const toggleRotate = () => setRotated(r => !r);

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleRotate();
    }
  };

  const phone = '+4915196620333';
  const mail = 'mail@see-service-group.de';
  const website = 'https://see-service-group.de';
  const address = 'Franklinstr. 18, 58089 Hagen';
  const mapsQuery = encodeURIComponent(`${address}`);

  return (
    <section className="contentBackgroundOverlay" aria-labelledby="card-heading" style={{ height: '75%' }}>
      <div className="centeredContent">
        <h1 id="card-heading" className="homeTitleHeadline">SEE Service Group</h1>
        <h2>Inhaber: Sascha Ernst</h2>

        <div className="card-wrapper">
          <div
            className={`card ${rotated ? 'rotated' : ''}`}
            role="button"
            tabIndex="0"
            aria-pressed={rotated}
            aria-label={rotated ? 'Zeige Vorderseite' : 'Zeige Rückseite'}
            onClick={toggleRotate}
            onKeyDown={onKeyDown}
          >
            <div className="card-contents card-front" aria-hidden={rotated}>
              <div className="card-depth">
                <img src={logoLong} alt="SEE Service Group Logo" />
                <hr />
                <p className="motto">Ihre Vision, unsere Mission</p>
              </div>
            </div>

            <div className="card-contents card-back" aria-hidden={!rotated}>
              <div className="card-depth">
                <h1>Sascha Ernst</h1>
                <hr />
                <div className="contact-line">
                  <strong>Tel:</strong>{' '}
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} aria-label={`Anrufen ${phone}`}>
                    {phone}
                  </a>
                </div>
                <div className="contact-line">
                  <strong>Mail:</strong>{' '}
                  <a href={`mailto:${mail}`} aria-label={`E-Mail an ${mail}`}>
                    {mail}
                  </a>
                </div>
                <div className="contact-line">
                  <strong>Web:</strong>{' '}
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    see-service-group.de
                  </a>
                </div>
                <div className="contact-line" style={{ textAlign: 'center' }}>
                  <strong>Adresse:</strong>
                  <br />
                  <span>SEE Service Group</span>
                  <br />
                  <span>{address}</span>
                </div>

                <a
                  className="map-button"
                  href="https://maps.app.goo.gl/V5r1gWQdziG3Qggi9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Öffne ${address} in Google Maps`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                  Karte ansehen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowBigScreenCard;
