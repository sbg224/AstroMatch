import { useState } from "react";
import "./Header.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

// Fonction pour obtenir une couleur néon aléatoire
function getRandomNeonColor() {
    const neonColors = [
        '#00FF00',  // Vert néon
        '#FF00FF',  // Rose néon
        '#00FFFF',  // Bleu cyan néon
        '#FF0000',  // Rouge néon
        '#FFFF00',  // Jaune néon
        '#FF1493',  // Deep Pink
        '#32CD32',  // Lime Green
        '#FF6347',  // Tomato
        '#7CFC00',  // Lawn Green
        '#FFD700',  // Gold
    ];

    return neonColors[Math.floor(Math.random() * neonColors.length)];
}

function Header() {
    const [neonColor, setNeonColor] = useState("#00FF00");

    // Mettre à jour la couleur néon à chaque survol
    const handleMouseEnter = () => {
        const randomColor = getRandomNeonColor();
        setNeonColor(randomColor);
        // Mettre à jour la variable CSS --neon-color
        document.documentElement.style.setProperty('--neon-color', randomColor);
    };

    // Réinitialiser la couleur à la valeur par défaut
    const handleMouseLeave = () => {
        setNeonColor("#00FF00");
        document.documentElement.style.setProperty('--neon-color', "#00FF00");
    };

    return (
        <div id="divHeader">
            <nav className="navHeader">
                <ul className="ulHeader">
                    <li onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}><Link to="/meet">Meet</Link></li>
                    <li><Link to="/"><img src={logo} alt="logo" /></Link></li>
                    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
