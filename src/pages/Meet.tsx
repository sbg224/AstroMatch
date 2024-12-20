import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Meet.css";
import reviews from "../Tableaux/Avis.json";
import Sidebar from "./SideBar";
import "./Notification.css";
import { NotificationContext } from "./NotificationProvider";
import { useContext } from "react";

function Meet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProfile = reviews[currentIndex];
  const showNotification = useContext(NotificationContext);
  const handleClick = () => {
    showNotification("Vous n'avez pas souscrit à l'abonnement...");
  };

  const handleSwipeLeft = () => {
    if (swipingOut) return; // Empêche de swiper pendant une transition
    setDirection(-1); // Indique un swipe à gauche
    setCurrentX(-200); // Déclenche un mouvement léger
    setSwipingOut(true); // Active la transition
  };

  const handleSwipeRight = () => {
    if (swipingOut) return; // Empêche de swiper pendant une transition
    setDirection(1); // Indique un swipe à droite
    setCurrentX(200); // Déclenche un mouvement léger
    setSwipingOut(true); // Active la transition
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const [swipingOut, setSwipingOut] = useState(false);
  const [direction, setDirection] = useState(0);

  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      setCurrentX(dx);
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      const threshold = 20;
      if (Math.abs(currentX) > threshold) {
        const dir = currentX > 0 ? 1 : -1;
        setDirection(dir);
        setCurrentX(dir * 20);
        setSwipingOut(true);
      } else {
        setCurrentX(0);
        setDirection(0);
      }
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, currentX, reviews.length]);

  const handleMouseDown = (e) => {
    if (swipingOut) return;
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setDirection(0);
  };

  const handleTransitionEnd = () => {
    if (swipingOut) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setCurrentX(0);
      setDirection(0);
      setSwipingOut(false);
    }
  };

  const rotation = currentX / 20;
  const opacity = Math.max(1 - Math.abs(currentX) / 300, 0);
  const indicatorOpacity = Math.min(Math.abs(currentX) / 20, 1);

  const navigate = useNavigate()
  const MyProfile = (id)=>{
    navigate(`/Meet/${id}`)
  }
  return (
    <>
      <h1 className="meet-swip">Swiping</h1>
      <div className="meet-container">
        <div
          className={`profile-card ${isDragging ? "dragging" : ""}`}
          onMouseDown={handleMouseDown}
          onTransitionEnd={handleTransitionEnd}
          ref={cardRef}
          style={{
            transform: `translateX(${currentX}px) rotate(${rotation}deg)`,
            opacity: opacity,
          }}
        >
          <div className="indicators">
            <div
              className="indicator indicator-left"
              style={{ opacity: currentX < 0 ? indicatorOpacity : 0 }}
            >
              ❌
            </div>
            <div
              className="indicator indicator-right"
              style={{ opacity: currentX > 0 ? indicatorOpacity : 0 }}
            >
              ❤️
            </div>
          </div>
          <div className="profile-image">
            <img onClick={()=> MyProfile(currentProfile.id)} src={currentProfile.image} alt={currentProfile.name} />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{currentProfile.name}</h2>
            <p className="profile-planet">
              Bonjour je vien de la Planète{" "}
              <strong>{currentProfile.planet}</strong> et j'ai{" "}
              <strong>{currentProfile.age}</strong>
            </p>
            <p className="profile-bio">
              Bio: <br /> <br />
            </p>
            <p className="rofile-bio-text">{currentProfile.bio}</p>
          </div>
          <div className="button-test">
            <div className="button-test">
              <button onClick={handleSwipeLeft}>⊲</button>
              <button onClick={handleClick}>✪</button>
              <button onClick={handleSwipeRight}>⊳</button>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default Meet;
