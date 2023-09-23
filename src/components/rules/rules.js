import "./rules.css";
import purpleflare3 from "../../images/purpleflare3.svg";
import purpleflare4 from "../../images/purpleflare4.svg";
import star1 from "../../images/star1.svg";
import star2 from "../../images/star2.svg";
import woman from "../../images/woman.png";
const Rules = () => {
    return (
        <section className="rules-container">
            <div className="flares" id="flare3"><img src={purpleflare3} alt="purple flare" /></div>
            <div className="flares" id="flare4"><img src={purpleflare4} alt="purple flare" /></div>
            <div className="stars" id="star6"><img src={star2} alt="star" /></div>
            <div className="stars" id="star7"><img src={star1} alt="star" /></div>
            <div className="text-stn">
                <h3>Rules and</h3>
                <h3>Guidelines</h3>
                <p>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
            </div>
            <div className="rules-img-wrapper">
                <img src={woman} alt="woman being productive" />
                <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134" fill="none">
                        <circle cx="67" cy="67" r="67" fill="url(#paint0_linear_65_65)" />
                        <defs>
                            <linearGradient id="paint0_linear_65_65" x1="134" y1="67" x2="3.69183" y2="67" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#8F01FE" />
                                <stop offset="1" stop-color="#FF2674" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Rules;