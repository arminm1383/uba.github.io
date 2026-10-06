
import { useState, useEffect } from 'react';
import Controller from './Controller.tsx';
import '../styles/EventScroll.css';
import {motion} from 'motion/react'
import paperFilter from "../assets/paper.png";

interface Event {
    name: string;
    image: string;
    description: string;
    alt: string;
}

function EventScroll() {

    useEffect(() => {
        document.body.style.backgroundColor = '#F9F9F9';
        document.body.style.filter = `url(${paperFilter})`;
        document.body.style.backgroundBlendMode = "multiply";
        document.body.style.backgroundSize = "cover";

        return () => {
            document.body.style.backgroundColor = '#F9F9F9';
            document.body.style.backgroundImage = `url(${paperFilter})`;
            document.body.style.backgroundBlendMode = "multiply";
            document.body.style.backgroundSize = "cover";
        }
    });

    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    const eventArray: Event[] = [
        {name: "Big Four Accounting Panel", image: '../images/fall/wk2_panel.png', description: "Week 2", alt: "Artwork for Big Four Accounting Panel"},
        {name: "Mentor & Mentee Social", image: '../images/fall/mentorship_social.png', description: "Week 1", alt: "Artwork for Mentor $ Mentee Social"},
        {name: "Week One Social", image: '../images/fall/wk1_social.png', description: "Week 1", alt: "Artwork for Week One Social"},
        {name: "Big Four Accounting Panel", image: '../images/fall/wk2_panel.png', description: "Week 2", alt: "Artwork for Big Four Accounting Panel"},
        {name: "Mentor & Mentee Social", image: '../images/fall/mentorship_social.png', description: "Week 1", alt: "Artwork for Mentor $ Mentee Social"},
        {name: "Week One Social", image: '../images/fall/wk1_social.png', description: "Week 1", alt: "Artwork for Week One Social"},
    ]

    const visibleCards = [
        (index - 2 + eventArray.length) % eventArray.length,
        (index - 1 + eventArray.length) % eventArray.length,
        index,
        (index + 1) % eventArray.length,
        (index + 2) % eventArray.length,
    ]


    function handleNext(){
        setPrevIndex(index);
        setIndex((index + 1) % eventArray.length);
    }

    function handlePrevious() {
        setPrevIndex(index);
        setIndex((index - 1 + eventArray.length) % eventArray.length);
    }

    function handlePlay() {

    }

    return (
        <div className="eventScrollWrapper">
            <div className="eventScroll">
                {visibleCards.map((event, position) => {
                    const isCurrent = position === 2;
                    const isWrapping = Math.min(
                        Math.abs(event - prevIndex),
                        eventArray.length - Math.abs(event - prevIndex)
                    ) > 2;
                    return (
                        <motion.div
                            key={event}
                            layout = {!isWrapping}
                            className={isCurrent ? "eventCurrent" : "event"}
                            animate = {{
                                scale: isCurrent ? 1.2 : .8,
                        }}
                            transition = {{type: "spring", stiffness: 300, damping: 20}}
                        >
                            <img src={eventArray[event].image} alt={eventArray[event].alt} />
                            {isCurrent && (
                                <>
                                    <h1 className="eventTitle">{eventArray[event].name}</h1>
                                    <p className="eventDescription">{eventArray[event].description}</p>
                                </>
                            )}
                        </motion.div>
                    )
                })}
            </div>
        <Controller onNext={handleNext} onPrevious={handlePrevious} onPlay={handlePlay}/>
        </div>
    )
}

export default EventScroll;