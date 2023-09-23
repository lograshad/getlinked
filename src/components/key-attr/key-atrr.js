import star1 from "../../images/star1.svg";
import star2 from "../../images/star2.svg";
import star5 from "../../images/star5.svg";
import purpleflare5 from "../../images/purpleflare5.png";
import purpleflare6 from "../../images/purpleflare6.png";
import manandwoman from "../../images/manandwoman.png";

const Key = () => {
    return (
        <section className="key-attr-container">
            <div className="stars" id="star8"><img src={star5} alt="shining star" /></div>
            <div className="stars" id="star9"><img src={star2} alt="shining star" /></div>
            <div className="stars" id="star10"><img src={star1} alt="shining star" /></div>
            <div className="flares" id="flare5"><img src={purpleflare5} alt="purple flare" /></div>
            <div className="flares" id="flare6"><img src={purpleflare6} alt="purple flare" /></div>
            <div className="illustration"><img src={manandwoman} alt="man and woman planning" /></div>
            <div className="text-stn">
                <div className="h3">
                    <h3>Judging Criteria</h3>
                    <h3>Key attributes</h3>
                </div>
                <article>
                    <p><span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                    <p><span>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
                    <p><span>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
                    <p><span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>
                    <p><span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
                </article>
                <button>Read More</button>
            </div>
        </section>
    );
}

export default Key;