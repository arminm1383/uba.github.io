import "../styles/Home.css";
import {useEffect, useRef} from "react";
import paperFilter from "../assets/paper.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import InfiniteCarousel from "../components/InfiniteCarousel"
import Lenis from 'lenis'
import Cards from "../components/Cards";

function Home () {

    const heroRef = useRef<HTMLDivElement>(null);
    const moreInfoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lenis = new Lenis ({
            autoRaf: true,
            duration: 1.6,
            easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        })

        lenis.on('scroll', (e) => {
            const scrollY = e.scroll;
            const moreInfoTop = moreInfoRef.current?.offsetTop || 0;
            const buffer = window.innerHeight * .15; // Reduced buffer for accuracy

            if (scrollY < moreInfoTop - buffer) {
                console.log('In Hero Section');
            } else {
                console.log('In More Info Section');
            }
        });
    }, []);

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
            <motion.div className="heroSection"
                        ref = {heroRef}
                        initial = {{opacity: 0}}
                        animate = {{opacity: 80}}
                        transition = {{duration: 2}}>
                <img src = "/images/UBA_logo.png" alt = "UBA Logo" className = "logo"/>
                <motion.div className={"textContainer"}
                            initial = {{opacity: 0}}
                            animate = {{opacity: 100}}
                            transition = {{duration: 2}}>
                    <h1 className="headerText">Undergraduate Business Association</h1>
                    <h1 className="subText">Dedicated to helping students discover
                        their career paths & build strong professional skills</h1>
                </motion.div>
            </motion.div>
            <InfiniteCarousel />

            <motion.div
                ref = {moreInfoRef}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1] // easeInOut
                }}
                viewport={{ once: true, amount: 0.3 }}>
                {/*<h1 className="moreInfoHeader">More About UBA</h1>*/}
            </motion.div>
            <div className={"moreInfo"}>
                <Cards
                    frontContent={"/images/about_container.png"}
                    cardType={"about"}/>
                <Cards
                    frontContent={"/images/events_container.png"}
                    cardType={"events"}/>
                <Cards
                    frontContent={"/images/get_involved_container.png"}
                    cardType={"get_involved"}/>
            </div>
            <Footer />
        </div>
)
}

export default Home