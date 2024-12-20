import { useState } from "react";
import "./Header.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function getRandomNeonColor() {
	const neonColors = [
		"#00FF00",
		"#FF00FF",
		"#00FFFF",
		"#FF0000",
		"#FFFF00",
		"#FF1493",
		"#32CD32",
		"#FF6347",
		"#7CFC00",
		"#FFD700",
	];

	return neonColors[Math.floor(Math.random() * neonColors.length)];
}

function Header() {
	const [neonColor, setNeonColor] = useState("#00FF00");
	const handleMouseEnter = () => {
		const randomColor = getRandomNeonColor();
		setNeonColor(randomColor);
		document.documentElement.style.setProperty("--neon-color", randomColor);
	};
	const handleMouseLeave = () => {
		setNeonColor("#00FF00");
		document.documentElement.style.setProperty("--neon-color", "#00FF00");
	};

	return (
		<div id="divHeader">
			<nav className="navHeader">
				<ul className="ulHeader">
					<li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<Link to="/meet">Meet</Link>
					</li>
					<li>
						<img src={logo} alt="logo" />
					</li>
					<li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
