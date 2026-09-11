
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
        {name: "Resume Workshop", image: '../images/flyers/resume_workshop.jpg', description: "Week 8", alt: "Artwork for Resume Workshop"},
        {name: "Internship Speaker Event", image: '../images/flyers/internship_panel.PNG', description: "Week 7", alt: "Artwork for Internship Panel"},
        {name: "Restaurant Operations Panel", image: '../images/flyers/guest_speaker.PNG', description: "Week 6", alt: "Artwork for Operations Panel"},
        {name: "Midterm Study Session", image: '../images/flyers/study_sesh.png', description: "Week 5", alt: "Artwork for Midterm Study Sesh"},
        {name: "Mock Interview Workshop", image: '../imagesflyers/interview_workshop.png', description: "Week 4", alt: "Artwork for Mock Interview Workshop"},
        {name: "Collaborative Case Study", image: '../images/flyers/case.PNG', description: "Week 3", alt: "Artwork for Case Study"},
        {name: "Spring Social", image: '../images/flyers/spring_social.PNG', description: "Week 2", alt: "Artwork for Spring Social"},
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