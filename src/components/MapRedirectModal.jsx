import { useState, useEffect } from 'preact/hooks';

const MapRedirectModal = ({ isOpen, onClose }) => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      window.open('https://www.google.de/maps/dir//Franklinstra%C3%9Fe+18,+58089+Hagen/@51.3503946,7.3712554,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47b93b68f34f401f:0x97d3a5431eb16d8!2m2!1d7.4536556!2d51.3504235?entry=ttu', '_blank');
      onClose();
    }
  }, [isOpen, countdown]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <p>Du wirst zu Google-Maps weitergeleitet</p>
      <p>Countdown: {countdown}</p>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default MapRedirectModal;
