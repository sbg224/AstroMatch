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

  const predefinedResponses = [
    "Salut, tu veux explorer la galaxie avec moi ?",
    "Lumière ou obscurité ? Je peux t’offrir les deux.",
    "Ma Force est puissante, mais toi… encore plus.",
    "Tu veux tester la vitesse de la lumière ?",
    "Prête à faire exploser ton univers avec moi ?",
    "Vas-y viens, file-moi ton fax de vaisseau pour qu'on se capte en visio.",
    "Allez, envoie-moi ton fax de vaisseau, on se capte en visio, ça va chauffer !",
    "File-moi ton fax de vaisseau, on se voit en visio et on fait exploser l'hyperespace !",
    "Envoyez-moi ton fax de vaisseau, prêt à faire un saut en hyperespace ensemble ?",
    "Vas-y, balance ton fax de vaisseau pour qu’on décolle en visio, je t'attends !",
    "Passe-moi ton fax de vaisseau, et je viens te rejoindre pour une mission galactique !",
    "File-moi ton fax de vaisseau, et prépare-toi à voyager en hyperespace avec moi.",
    "Vas-y, donne-moi ton fax de vaisseau, je t’emmène en visio, et on décolle !",
    "Envoie ton fax de vaisseau, on se capte en visio pour une aventure galactique ensemble.",
    "File-moi ton fax de vaisseau, et on part à la vitesse de la lumière pour notre visio.",
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
