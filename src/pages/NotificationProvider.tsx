import React, { createContext, useState } from "react";

export const NotificationContext = createContext();


export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      {notification && <div className="notification">{notification}</div>}
    </NotificationContext.Provider>
  );
};
