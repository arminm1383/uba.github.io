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
            <h1 className = {"header"}>Our 2026 - 2027 Executive Board</h1>
            <div className={"mainSection"}>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/skye.jpeg"} alt = " "/>
                    <h1 className = "boardTitle">President</h1>
                    <h1 className = "boardName">Skye Charisma Garces</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/maddie.jpeg"} alt = " "/>
                    <h1 className = "boardTitle">Executive Vice President</h1>
                    <h1 className = "boardName">Madeleine Chen</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/ryan_pang_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Administration</h1>
                    <h1 className = "boardName">Anthony Rodriguez</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/matthew_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Company Relations</h1>
                    <h1 className = "boardName">Enkh-Ujin Munkhbaatar</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/kakeru.jpeg"} alt = " "/>
                    <h1 className = "boardTitle">VP of Company Relations</h1>
                    <h1 className = "boardName">Kakeru Hirano</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/kaylee.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Company Relations</h1>
                    <h1 className = "boardName">Kaylee Colorado</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/armin_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Internal Relations</h1>
                    <h1 className = "boardName">Lana Higa</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/ian.jpeg"} alt = " "/>
                    <h1 className = "boardTitle">VP of Internal Relations</h1>
                    <h1 className = "boardName">Ian Shone</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/lucy.jpeg"} alt = " "/>
                    <h1 className = "boardTitle">VP of Internal Relations</h1>
                    <h1 className = "boardName">Lucy Luu</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/skye_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Marketing</h1>
                    <h1 className = "boardName">Robyn Henson</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/keili_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Marketing</h1>
                    <h1 className = "boardName">Brody Nguyen</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/sarah.jpeg"} alt = " "/>
                    <h1 className = "boardTitle">VP of Marketing</h1>
                    <h1 className = "boardName">Sara Freestone</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/tim_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Professional Development</h1>
                    <h1 className = "boardName">Thomas Park</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/ryan_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Professional Development</h1>
                    <h1 className = "boardName">Tanya Banerjee</h1>
                </div>
                <div className={"boardContainer"}>
                    <img src={"../images/board_photos/jack_photo.JPG"} alt = " "/>
                    <h1 className = "boardTitle">VP of Finance</h1>
                    <h1 className = "boardName">Alexander Myong</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Board;