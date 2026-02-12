import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css"
import { useEffect } from "react";
import Lenis from "lenis";
import paperFilter from "../assets/paper.png";

function About() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

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

    return (
        <div>
            <Navbar />
            <div className="aboutSection">

                <div className="aboutRow">
                    <img src="/images/finance_panel_photo.png" className="aboutImage" alt="Unique" />
                    <div className="aboutText">
                        <h2 className="aboutTitle">Unique</h2>
                        <p className="aboutBody">Committed towards serving the UCI community, The Undergraduate Business Association (UBA) at UCI strives to help students navigate their career journeys in business. Our direct industry experience helps drive students towards navigating UCI and discovering their path. Through our weekly meetings, students can join a network of passionate students eager to broaden their skills.</p>
                    </div>
                </div>

                <div className="aboutRow reverse">
                    <img src="/images/company_relations_photo.png" className="aboutImage" alt="Beneficial" />
                    <div className="aboutText right">
                        <h2 className="aboutTitle">Beneficial</h2>
                        <p className="aboutBody">As UCI's oldest general business club, our resources are tailored to UCI's thriving and ever-growing business community. Our goal is to expand professional development skills for student, working firsthand to connect individuals with industry while also working on resume building skills, interview preperation, and business acumen overall.</p>
                    </div>
                </div>

                <div className="aboutRow">
                    <img src="/images/sales_panel_photo.png" className="aboutImage" alt="Aspiring" />
                    <div className="aboutText">
                        <h2 className="aboutTitle">Aspiring</h2>
                        <p className="aboutBody">Driven by our passionate team of board members and interns, we are constantly innovating the way we interact with students. Whether it be new programs like our resume workshops or collaborative events with clubs across all different industries, UBA consistently drives towards expanding our connection with the community around us.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default About;