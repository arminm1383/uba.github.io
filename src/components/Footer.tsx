import "../styles/Footer.css"

function Footer () {
    return (
        <div className="footer">
            <ul>
                <li className ={"uciText"}>University of California, Irvine<br />
                    Paul Merage School of Business
                </li>
                <li className ={"contactText"}>Contact:</li>
                <li>
                    <a href={"mailto:uba.uci.president@gmail.com"}>
                        <img src = "/images/mail.png" className={"contactItem"} alt="Mail Icon"/>
                    </a>
                </li>
                <li>
                    <a href={"https://www.linkedin.com/company/undergraduatebusinessassociation"} target="_blank" rel="noopener noreferrer">
                        <img src = "/images/linkedin.png" className={"contactItem"} alt="LinkedIn Icon"/>
                    </a>
                </li>
                <li>
                    <a href={"https://www.instagram.com/ubauci/?hl=en"} target="_blank" rel="noopener noreferrer">
                        <img src = "/images/instagram.png" className={"contactItem"} alt="LinkedIn Icon"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;