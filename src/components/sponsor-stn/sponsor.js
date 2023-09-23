import "./sponsor.css";
import star1 from "../../images/star1.svg";
import star4 from "../../images/star4.svg";
import purpleflare9 from "../../images/purpleflare9.png";
import purpleflare10 from "../../images/purpleflare10.png";
import libertyassured from "../../images/libertyassured.png";
import libertypay from "../../images/libertypay.png";
import winwise from "../../images/winwise.png";
import wisper from "../../images/wisper.png";

const Sponsor = () => {
    return (
        <section className="sponsors-stn">
            <div className="stars star19"><img src={star4} alt="star" /></div>
            <div className="stars star20"><img src={star4} alt="star" /></div>
            <div className="stars star21"><img src={star1} alt="star" /></div>
            <div className="flares flare1"><img src={purpleflare9} alt="" /></div>
            <div className="flares flare2"><img src={purpleflare10} alt="" /></div>
            <h3>Partners and Sponsors</h3>
            <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
            <div className="sponsors-container">
                <div className="container-content">
                    <div className="top">
                        <div className="img-wrapper"><img src={libertyassured} alt="libertya ssured logo" /></div>
                        <div className="img-wrapper"><img src={libertypay} alt="liberty pay logo" /></div>
                        <div className="img-wrapper"><img src={winwise} alt="winwise logo" /></div>
                    </div>
                    <div id="lines"></div>
                    <div id="lines"></div>
                    <div id="lines"></div>
                    <div className="bottom">
                        <div className="img-wrapper"><img src={wisper} alt="whisperms logo" /></div>
                        <div className="img-wrapper weirdos">pay<span>box</span></div>
                        <div className="img-wrapper weirdos">Vuzual <span>Plus</span><div>design studios</div></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sponsor;