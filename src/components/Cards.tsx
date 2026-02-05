
import {useState} from "react";
import {motion} from "motion/react";
import CardBackside from "./CardBackside";
import "../styles/Cards.css";

interface CardsProps {
    frontContent: string;
    cardType: 'about' | 'events' | 'get_involved';
}

function Cards ({frontContent, cardType} : CardsProps) {
    const [rotation, setRotation] = useState(0);

    const cardsData = {
        about: {
            headerText: "About UBA",
            subtext: "Dedicated towards serving the UCI community, The Undergraduate Business Association (UBA) at UCI strives to help students navigate their career journeys in business.\n\nOur direct industry experience helps drive students towards navigating UCI and discovering their path.",

            url: '/about'
        },
        events: {
            headerText: "Events",
            subtext: "",
            url: '/events'
        },
        get_involved: {
            headerText: "Get Involved",
            subtext: "",
            url: '/get-involved'
        }
    };

    const cardInfo = cardsData[cardType];

    return (
        <motion.div
            onClick = {() => setRotation(prev => prev + 180)}
            style = {{
                width: "25%",
                aspectRatio: 1663 / 2273,
                perspective: "1000px",
                cursor: "pointer"
            }}
        >
            <motion.div
                animate = {{rotateY: rotation}}
                transition = {{type: "spring", duration: 1.2, stiffness: 100, damping: 20, mass: 1}}
                    style = {{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transformStyle: "preserve-3d",
                }}>
                <div className = "cardFace" style = {{
                    transform: "rotateY(180deg)",
                }}>
                    <CardBackside
                        headerText = {cardInfo.headerText}
                        subtext = {cardInfo.subtext}
                        url = {cardInfo.url}/>
                </div>
                <div className = "cardFace">
                    <img src={frontContent} className={"cardFront"}/>
                </div>
            </motion.div>
        </motion.div>
    )
}
export default Cards;