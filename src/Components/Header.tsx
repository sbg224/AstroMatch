import "./Header.css"
import logo from "../assets/react.svg";

function Header() {
    return (
    <div className="divHeader">
        <nav className="navHeader">
            <ul className="ulHeader">
                <li>Meet</li>
                <li><img src={logo}alt="logo"/></li>
                <li>Contact</li>
            </ul>
        </nav>
    </div> 
    )
}
export default Header