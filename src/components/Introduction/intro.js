import "./intro.css";
import star4 from "../../images/star4.svg";
import star5 from "../../images/star5.svg";
import bigIdea from "../../images/bigIdea.svg";
import arrow from "../../images/arrow.svg";
const Intro = () => {
    return (
        <section className="introduction-container">
            <div className="svgs" id="star4"><img src={star4} alt="star" /></div>
            <div className="svgs" id="star5"><img src={star5} alt="star" /></div>
            <div className="svgs" id="arrow"><img src={arrow} alt="curved arrow" /></div>
            <div className="bulb-img"><img src={bigIdea} alt="idea illustration" /><div className="bulb-text">The Big Idea</div></div>
            <div className="text-section">
                <h3>Introduction to getlinked</h3>
                <h3>tech Hackathon 1.0</h3>
                <p>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
            </div>
        </section>
    );
}

export default Intro;