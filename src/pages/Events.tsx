import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventScroll from "../components/EventScroll";
import {useEffect} from "react";
import Lenis from "lenis";

function Events() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    return (
        <div>
            <Navbar />
            <EventScroll />
            <Footer />
        </div>
    )
}

export default Events;