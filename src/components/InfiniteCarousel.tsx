
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import "../styles/InfiniteCarousel.css"
import {useRef} from "react";

function InfiniteCarousel(){

    const photos = [
        <img src={"/images/cabin_photo.png"} alt = " " />,
        <img src={"/images/digital_marketing_photo.png"} alt = " " />,
        <img src={"/images/dinosaur_photo.png"} alt = " " />,
        <img src={"/images/lake_photo.png"} alt = " " />,
        <img src={"/images/mexican_food_photo.png"} alt = " " />,
        <img src={"/images/aif_photo.png"} alt = " " />
    ]

    const allPhotos = [...photos, ...photos, ...photos];

    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const speed = 100;

    useAnimationFrame(( _, delta) => {
        if (!containerRef.current) return;

        const deltaInSeconds = delta / 1000;
        const containerWidth = containerRef.current.scrollWidth;
        const resetPoint = -1 * containerWidth / 3;

        let newX = x.get() - (speed * deltaInSeconds);

        if (newX <= resetPoint){
            newX = 0;
        }

        x.set(newX);
    });

    return (
        <div style = {{overflow: 'hidden'}}>
            <motion.div className="infiniteCarousel" ref={containerRef} style={{x}}>
                {allPhotos.map((photo, i) =>
                    <div key = {i}
                         style={{
                             flexShrink: 0,
                             width: `${100 / photos.length * 1.6}%`,
                             padding: '80px 60px'
                         }}
                    >{photo}</div>
                )}
            </motion.div>
        </div>

    )
};

export default InfiniteCarousel;