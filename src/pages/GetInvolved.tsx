import Navbar from "../components/Navbar";
import "../styles/GetInvolved.css"
import {useEffect} from "react";
import paperFilter from "../assets/paper.png";
import "../styles/Home.css";

function GetInvolved() {
    useEffect(() => {
        document.body.style.backgroundColor = "#F9F9F9";
        document.body.style.backgroundImage = `url(${paperFilter})`;
        document.body.style.backgroundBlendMode = "multiply";
        document.body.style.backgroundSize = "cover";

        return () => {
            document.body.style.backgroundColor = "#F9F9F9";
            document.body.style.backgroundImage = "";
            document.body.style.backgroundBlendMode = "";
            document.body.style.backgroundSize = "";
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className={"heroSection"}>
                <h1 className="headerText">Interested in UBA?</h1>
                <p className={"subText"}>
                    If you have any questions, concerns, or just curious to learn more,<br />
                    please feel free to email us!
                </p>
                <a className="confirmButton" href="mailto:uba.uci.president@gmail.com">uba.uci.president@gmail.com</a>
                <h1 className = {"subText"}>Reach Out to Us on Social Media</h1>
            </div>
            <div className="socialButtons">
                <a href="https://www.instagram.com/ubauci/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram.png" className="contactItem" alt="Instagram Icon"/>
                </a>
                <a href="https://www.linkedin.com/company/undergraduatebusinessassociation" target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedin.png" className="contactItem" alt="LinkedIn Icon"/>
                </a>
            </div>
        </div>
    )
}

export default GetInvolved;