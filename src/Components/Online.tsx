import { useState, useEffect } from 'react';
import './Online.css';

type MyOnlineType = {
  imageSrc: string;
  name: string;
  initialStatus?: boolean; // Ajout d'une prop optionnelle pour le statut initial
};

function Online({ imageSrc, name, initialStatus = false }: MyOnlineType) {
  const [isOnline, setIsOnline] = useState(initialStatus);

  // Simule une mise à jour dynamique du statut
  useEffect(() => {
    const interval = setInterval(() => {
      // Change dynamiquement le statut toutes les 5 secondes
      setIsOnline((prevStatus) => !prevStatus);
    }, 8000);

    return () => clearInterval(interval); // Nettoyer l'intervalle pour éviter des fuites de mémoire
  }, []);

  return (
    <div id="Online">
      <p className="OnlineProfileP">{isOnline ? 'En ligne' : 'Hors ligne'}</p>
      <img src={imageSrc} alt={name} className="OnlineProfile" />
    </div>
  );
}

export default Online;