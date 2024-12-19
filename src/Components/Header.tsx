import "./Header.css"
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="divHeader">
            <nav className="navHeader">
                <ul className="ulHeader">
                    <li><Link to="/meet">Meet</Link></li>
                    <li><img src={logo}alt="logo"/></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div> 
    )
}
export default Header