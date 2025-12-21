
import '../styles/Navbar.css';

function Navbar () {
    return (
        <nav className = {"navbar"}>
            <ul>
                <li>
                    <a href={"/"}>
                        <img src = "/images/Home.png" className={"home-icon"} alt="Home Icon"/>
                    </a>
                </li>
                <li><a href={"/about"} className={"nav-item"}>About</a></li>
                <li><a href={"/events"} className={"nav-item"}>Events</a></li>
                <li><a href={"/board"} className={"nav-item"}>Board</a></li>
                <li><a href={"/get-involved"} className={"nav-item"}>Get Involved</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;