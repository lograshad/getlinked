import star4 from "../../images/star4.svg";
import star5 from "../../images/star5.svg";
import star1 from "../../images/star1.svg";
import star2 from "../../images/star2.svg";
import "./faq.css";
import manthinking from "../../images/manthinking.png";


const Faqs = () => {
    return (
        <section className="FAQs-stn">
            <div className="stars"><img src={star5} alt="shining star" /></div>
            <div className="stars"><img src={star4} alt="shining star" /></div>
            <div className="stars"><img src={star4} alt="shining star" /></div>
            <div className="stars"><img src={star2} alt="shining star" /></div>
            <div className="stars"><img src={star1} alt="shining star" /></div>
            <div className="text-stn">
                <div className="h3">
                    <h3>Frequently Asked</h3>
                    <h3>Question</h3>
                </div>
                <p id="answers">
                    We got answers to the questions that you might
                    want to ask about getlinked Hackathon 1.0
                </p>
                <div className="faqs">
                    <p><span>Can I work on a project I started before the hackathon?</span><span>+</span></p>
                    <p><span>What happens if I need help during the hackathon?</span><span>+</span></p>
                    <p><span>What happens if I don't have an idea for a project?</span><span>+</span></p>
                    <p><span>Can I join a team or do I have to come with one?</span><span>+</span></p>
                    <p><span>What happens after the hackathon ends</span><span>+</span></p>
                    <p><span>Can I work on a project I started before the hackathon?</span><span>+</span></p>
                </div>
            </div>
            <div className="illustration">
                <div className="question-marks">?</div>
                <div className="question-marks">?</div>
                <div className="question-marks">?</div>
                <img src={manthinking} alt="man thinking" />
            </div>
        </section>
    );
}

export default Faqs;