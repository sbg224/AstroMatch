import React, { useState } from "react";
import "./MessagesSidebar.css";

const MessagesSidebar = ({ messages }) => {
  const [selectedUser, setSelectedUser] = useState(null); // Suivi de l'utilisateur sélectionné

  const handleUserClick = (user) => {
    setSelectedUser(user); // Définit l'utilisateur sélectionné
  };

  return (
    <div className="sidebar-container">
      {/* Section principale de la messagerie */}
      <div className="sidebar-section messages">
        {!selectedUser ? (
          <>
            <h2>Messagerie</h2>
            <ul>
              {messages.map((msg) => (
                <li
                  key={msg.id}
                  className="user-item"
                  onClick={() => handleUserClick(msg)}
                >
                  {msg.name}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="user-messages">
            <div className="messages-header">
              <h2>{selectedUser.name}</h2>
              <button
                className="close-btn"
                onClick={() => setSelectedUser(null)} // Revenir à la liste principale
              >
                ✖
              </button>
            </div>
            <ul>
              {selectedUser.messages.map((message, index) => (
                <li key={index} className="message-item">
                  {message}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesSidebar;
