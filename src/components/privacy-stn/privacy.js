import star1 from "../../images/star1.svg";
import star2 from "../../images/star2.svg";
import star4 from "../../images/star4.svg";
import star5 from "../../images/star5.svg";
import purpleflare11 from "../../images/purpleflare11.png"
import boyunlock from "../../images/boyunlock.png"
import './privacy.css';

const Privacy = () => {
    return ( 
        <section className="privacy-stn">
        <div className="stars star22"><img src={star2} alt="star" /></div>
        <div className="stars star23"><img src={star5} alt="star" /></div>
        <div className="stars star24"><img src={star1} alt="star" /></div>
        <div className="stars star25"><img src={star5} alt="star" /></div>
        <div className="stars star26"><img src={star1} alt="star" /></div>
        <div className="stars star27"><img src={star4} alt="star" /></div>
        <div className="stars star28"><img src={star2} alt="star" /></div>
        <div className="flares"><img src={purpleflare11} alt=" purple flare" /></div>
        <div className="text-stn">
            <h3>Privacy Policy and</h3>
            <h3>Terms</h3>
            <p id="p1">Last updated on September 12, 2023</p>
            <p id="p2">Below are our privacy & policy, which outline a lot of goodies. It’s our aim to always take of our participant</p>
            <div className="termsNpolicy">
                <p>
                    At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose,
                    and safeguard your data when you participate in our tech
                    hackathon event. By participating in our event, you consent
                    to the practices described in this policy.
                </p>
                <p>Licensing Policy</p>
                <p>Here are terms of our Standard License:</p>
                <div className="terms">
                    <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                            <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
                        </svg>
                    </div>
                    <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                </div>
                <div className="terms">
                    <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                            <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
                        </svg>
                    </div>
                    <p>You are licensed to use the item available at any free source sites, for your project developement</p>
                </div>
                <button>Read More</button>
            </div>
        </div>
        <div className="illustration">
            <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 530 648" fill="none">
                    <path d="M264.871 589.574L265 589.608L265.129 589.574C320.476 574.81 372.093 534.519 409.868 482.021C447.645 429.521 471.611 364.768 471.611 301.025V156.109V155.785L471.315 155.652L265.204 63.7542L265 63.6635L264.796 63.7542L58.6853 155.652L58.3889 155.785V156.109V301.025C58.3889 364.768 82.3555 429.521 120.132 482.021C157.907 534.519 209.524 574.81 264.871 589.574ZM346.944 294.545V295.045H347.444C356.113 295.045 364.822 299.385 371.373 306.303C377.921 313.217 382.278 322.671 382.278 332.836V435.927C382.278 444.599 377.939 453.311 371.024 459.864C364.112 466.415 354.662 470.773 344.5 470.773H182.556C173.887 470.773 165.178 466.433 158.627 459.515C152.079 452.601 147.722 443.148 147.722 432.982V329.891C147.722 321.217 152.063 312.501 158.618 305.944C165.172 299.387 173.885 295.045 182.556 295.045H183.056V294.545V250.364C183.056 229.92 193.274 211.641 208.645 198.461C224.018 185.28 244.515 177.227 265 177.227C285.485 177.227 305.982 185.28 321.355 198.461C336.726 211.641 346.944 229.92 346.944 250.364V294.545ZM309.167 295.045H309.667V294.545V250.364C309.667 226.435 288.733 211.573 265 211.573C241.267 211.573 220.333 226.435 220.333 250.364V294.545V295.045H220.833H309.167ZM529.5 294.545C529.5 457.766 416.63 610.381 265 647.485C113.37 610.381 0.5 457.766 0.5 294.545V118.143L265 0.547189L529.5 118.143V294.545Z" fill="url(#paint0_linear_110_134)" fill-opacity="0.14" stroke="black" />
                    <defs>
                        <linearGradient id="paint0_linear_110_134" x1="265" y1="0" x2="265" y2="648" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#903AFF" />
                            <stop offset="1" stop-color="#FF26B9" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="img-wrapper">
                <img src={boyunlock} alt="boy on unlocked padlock" />
            </div>
        </div>
    </section>
     );
}
 
export default Privacy;