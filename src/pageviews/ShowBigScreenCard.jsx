import React from 'react';
import { useEffect } from 'preact/hooks';
import { useState } from 'preact/hooks';
import MapRedirectModal from '../components/MapRedirectModal';
//import '../layouts/Styles/bigscreenstyle.css';
import '../layouts/Styles/see-cardflip-style.css';

const ShowBigScreenCard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
  
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
  

    useEffect(() => {
        const card = document.querySelector('.card');
        if (card) {
            function clickRotate() {
                card.classList.toggle('rotated');
            }
            card.addEventListener('click', clickRotate);

            return () => {
                card.removeEventListener('click', clickRotate);
            };
        }
    }, []);

    return (
        <>
            <div className="cards-wrapper">
				<div className="card-container">
					<div className="card">
						<div className="card-contents card-front">
							<div className="card-depth">
								<img src="./logo-long.svg" className="bc-logo" alt="SEEsg-Logo" />
								<div className="card-slogan-container">
									{/* 
									<hr/>
									<p className="card-content-sloganline">Ihre Vision, unsere Mission</p>
									*/}
								</div>
							</div>
						</div>
						<div className="card-contents card-back">
							<div className="card-depth-back">
								<h1 className="black-font black-font-shadow">Sascha Ernst</h1>
								<hr/>
								<p className="card-content-sloganline green-font">Inhaber | Entrepreneur | Marketeer | Full-Stack Develover</p>
								<hr />
								<div className="contact-bspace contact-part">
								  <p className="contact-flexline"><img src="./img/see-icon-mobilenotch-dark.svg" alt="phone-logo" className="card-contact-icon" /></p>
								  <a className="contact-flexline-link" href="tel:+4915119662033">+49 (0)151 19 66 20 33</a>
								</div>
								<div className="contact-bspace contact-part">
								  <p><img src="./img/see-icon-mail-dark.svg" alt="mail-logo" className="card-contact-icon" /></p>
								  <a className="contact-flexline-link" href="mailto:mail@see-service-group.de">mail@see-service-group.de</a>
								</div>
								<div className="contact-bspace contact-part">
								  <p><img src="./img/see-icon-website-dark.svg" alt="web-logo" className="card-contact-icon" /></p>
								  <a className="contact-flexline-link" href="https://see-service-group.de" target="_blank">www.see-service-group.de</a>
								</div>
								<div className="contact-bspace contact-part">
								  <p><img src="./img/see-icon-address-dark.svg" alt="address-logo" className="card-contact-icon" /></p>
								  <div className="contact-block font-no-shadow">
								  	<b>SEE Service Group</b>
								  	<br/>
								  	<i>
										Franklinstr. 18
										<br/>
										58089 Hagen
								  	</i>
								  </div>
								  <div className="contact-button-row">
									<button 
										onClick={openModal} 
										className="contact-button"
									>
										Open in Google Maps
									</button>
										<MapRedirectModal 
											isOpen={isModalOpen} 
											onClose={closeModal} 
										/>
								  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    );
};
export default ShowBigScreenCard;
