import React, { createContext, useState } from "react";

// Créez le contexte de notification
export const NotificationContext = createContext();

// Fournisseur de notification
export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  // Fonction pour afficher une notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null); // Efface la notification après 3 secondes
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      {notification && <div className="notification">{notification}</div>}
    </NotificationContext.Provider>
  );
};
