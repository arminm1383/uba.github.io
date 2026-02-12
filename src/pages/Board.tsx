import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Board.css"
import paperFilter from "../assets/paper.png";
import {useEffect} from "react";
import Lenis from "lenis";

function Board() {
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
            <h1 className = {"header"}>Our 2025 - 2026 Executive Board</h1>
            <div className={"mainSection"}>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/kyle_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">President</h1>
                    <h1 className = "boardName">Kyle Shih</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/emily_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">Executive Vice President</h1>
                    <h1 className = "boardName">Emily Chen</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/ryan_pang_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Administration</h1>
                    <h1 className = "boardName">Ryan Pang</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/matthew_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Company Relations</h1>
                    <h1 className = "boardName">Matthew Nguyen</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/asia_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Company Relations</h1>
                    <h1 className = "boardName">Asia Chan</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/luvin_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Company Relations</h1>
                    <h1 className = "boardName">Luvin Lalwani</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/armin_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Internal Relations</h1>
                    <h1 className = "boardName">Armin Mohammadi</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/maddie_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Internal Relations</h1>
                    <h1 className = "boardName">Madeleine Chen</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/skye_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Marketing</h1>
                    <h1 className = "boardName">Skye Garces</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/keili_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Marketing</h1>
                    <h1 className = "boardName">Keili Ishiara</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/tim_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Professional Development</h1>
                    <h1 className = "boardName">Timothy Sih</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/ryan_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Professional Development</h1>
                    <h1 className = "boardName">Ryan Chung</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/jack_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Finance</h1>
                    <h1 className = "boardName">Jack Cirka</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Board;