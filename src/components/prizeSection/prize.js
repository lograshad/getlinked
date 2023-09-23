import "./prize.css";
import star1 from "../../images/star1.svg";
import star2 from "../../images/star2.svg";
import star4 from "../../images/star4.svg";
import purpleflare7 from "../../images/purpleflare7.png";
import purpleflare8 from "../../images/purpleflare8.png";
import goldmedal from "../../images/goldmedal.png";
import silvermedal from "../../images/silvermedal.png";
import bronzemedal from "../../images/bronzemedal.png";
import trophy from "../../images/trophy.png";

const Prizestn = () => {
    return ( 
        <section className="prize-stn-container">
        <div className="flares flare7"><img src={purpleflare7} alt="purple flare" /></div>
        <div className="flares flare8"><img src={purpleflare8} alt="purple flare" /></div>
        <div className="stars star13"><img src={star4} alt="" /></div>
        <div className="stars star14"><img src={star4} alt="" /></div>
        <div className="stars star15"><img src={star1} alt="" /></div>
        <div className="stars star16"><img src={star1} alt="" /></div>
        <div className="stars star17"><img src={star1} alt="" /></div>
        <div className="stars star18"><img src={star2} alt="" /></div>
        <section className="prize-stn">
            <div className="text-stn">
                <h3>Prizes and</h3>
                <h3>Rewards</h3>
                <p>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>
            <div className="illustration1"><img src={trophy} alt="trophy" /></div>
            <div className="illustration2-container">
                <div className="rewards">
                    <div className="medal-wrapper">
                        <img src={silvermedal} alt="silver medal" />
                    </div>
                    <div className="position">2nd</div>
                    <div className="status">Runner</div>
                    <div className="prize">N300,000</div>
                </div>
                <div className="rewards">
                    <div className="medal-wrapper">
                        <img src={goldmedal} alt="gold medal" />
                    </div>
                    <div className="position">1st</div>
                    <div className="status">Runner</div>
                    <div className="prize">N400,000</div>
                </div>
                <div className="rewards">
                    <div className="medal-wrapper">
                        <img src={bronzemedal} alt="bronze medal" />
                    </div>
                    <div className="position">3rd</div>
                    <div className="status">Runner</div>
                    <div className="prize">N150,000</div>
                </div>
            </div>
        </section>
    </section>
     );
}
 
export default Prizestn;