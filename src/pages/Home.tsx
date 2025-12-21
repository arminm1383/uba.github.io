import "../styles/Home.css";
import {useEffect} from "react";
import paperFilter from "../assets/paper.png";
import Navbar from "../components/Navbar";

function Home () {

    useEffect(() => {
        document.body.style.backgroundColor = "#6788AF";
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
        <>
            <Navbar />
            <div className="hero-section">
                <img src = "/images/UBA_logo.png" alt = "UBA Logo" className = "logo"/>
                <h1 className="headerText">undergraduate business association</h1>
            </div>
        </>
    )
}

export default Home