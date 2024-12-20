import React, { useState } from "react";
import "./Sidebar.css";
import profiles from "../Tableaux/Avis.json";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [inputMessage, setInputMessage] = useState("");

  const connectedUsers = profiles.length;
  const currentUser = {
    name: "John Doe",
    profileImage: "https://via.placeholder.com/50",
  };

  const initialMessages = profiles.map((profile) => ({
    id: profile.id,
    name: profile.name,
    profileImage: profile.image,
    messages: [],
  }));

  const [messages, setMessages] = useState(initialMessages);

  // Tableau de réponses préconfigurées
  const predefinedResponses = [
    "Intéressant, raconte-moi en plus.",
    "Je vois, c'est fascinant.",
    "Truc de ouff !",
    "Je n'aurais jamais imaginé cela.",
    "Ça mérite réflexion.",
  ];

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() || selectedUserId === null) return;
    setMessages((prevMessages) =>
      prevMessages.map((user) => {
        if (user.id === selectedUserId) {
          return {
            ...user,
            messages: [...user.messages, { text: inputMessage, from: "Vous" }],
          };
        }
        return user;
      })
    );

    setInputMessage("");

    // Sélection d'une réponse au hasard
    const randomResponse =
      predefinedResponses[
        Math.floor(Math.random() * predefinedResponses.length)
      ];

    setTimeout(() => {
      setMessages((prevMessages) =>
        prevMessages.map((user) => {
          if (user.id === selectedUserId) {
            return {
              ...user,
              messages: [
                ...user.messages,
                { text: randomResponse, from: user.name },
              ],
            };
          }
          return user;
        })
      );
    }, 1000);
  };

  const selectedUser =
    messages.find((user) => user.id === selectedUserId) || null;

  if (!isOpen) return null;

  return (
    <div className="sidebar-layout">
      <div className="sidebar">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          ✖
        </button>
        <div className="sidebar-section">
          <h2 className="Users-connect">
            Utilisateurs connectés : {connectedUsers}
          </h2>
        </div>
        <div className="sidebar-section current-user">
          <h2>Mon Profil</h2>
          <img
            src={currentUser.profileImage}
            alt={currentUser.name}
            className="profile-image"
          />
          <p>{currentUser.name}</p>
        </div>
        <div className="sidebar-section messages">
          <h2>Messagerie</h2>
          <ul>
            {messages.map((user) => (
              <li
                key={user.id}
                className={`user-item ${
                  selectedUserId === user.id ? "active" : ""
                }`}
                onClick={() => handleUserClick(user.id)}
              >
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="user-profile-image"
                />
                {user.name}
                <p className="user-status">O</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedUser && (
        <div className="conversation">
          <div className="conversation-header">
            <h2>{selectedUser.name}</h2>
            <img
              src={selectedUser.profileImage}
              alt={selectedUser.name}
              className="conversation-profile-image"
            />
            <button
              className="close-conversation-button"
              onClick={() => setSelectedUserId(null)}
            >
              ✖
            </button>
          </div>
          <ul className="conversation-messages">
            {selectedUser.messages.map((message, index) => (
              <li
                key={index}
                className={`message-item ${
                  message.from === "Vous" ? "sent" : "received"
                }`}
              >
                <img
                  src={
                    message.from === "Vous"
                      ? currentUser.profileImage
                      : selectedUser.profileImage
                  }
                  alt={message.from}
                  className="message-profile-image"
                />
                <div className="message-content">
                  <span className="message-from">{message.from}:</span>
                  <span className="message-text">{message.text}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="message-input-container">
            <input
              type="text"
              className="message-input"
              placeholder="Écrivez un message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button className="send-button" onClick={handleSendMessage}>
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
