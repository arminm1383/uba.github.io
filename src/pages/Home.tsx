import "../styles/Home.css";
import {useEffect} from "react";
import paperFilter from "../assets/paper.png";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import InfiniteCarousel from "../components/InfiniteCarousel"

function Home () {

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
        <>
            <Navbar />
            <motion.div className="hero-section"
            initial = {{opacity: 0}}
            animate = {{opacity: 80}}
            transition = {{duration: 1}}>
                <img src = "/images/UBA_logo.png" alt = "UBA Logo" className = "logo"/>
                <motion.div className={"textContainer"}
                initial = {{opacity: 0}}
                animate = {{opacity: 100}}
                transition = {{duration: 1}}>
                    <h1 className="headerText">Undergraduate Business Association</h1>
                    <h1 className="subText">Dedicated to helping students discover
                        their career path & build strong professional skills</h1>
                </motion.div>
            </motion.div>
            <InfiniteCarousel />
        </>
    )
}

export default Home