import NavBar from "../../components/navbar/navbar";
import "./home.css";
import { Link } from 'react-router-dom'
import boy from "../../images/boy.png";
import glowball from "../../images/glowball.png";
import purpleLens from "../../images/purpleLens.png";
import purpleLens2 from "../../images/purpleLens2.png";
import chain from "../../images/chain.png";
import spark from "../../images/spark.png";
import woman from "../../images/woman.png";
import Vector4 from "../../images/Vector 4.svg";
import bulb from "../../images/bulb.svg";
import star1 from "../../images/star1.svg";
import star2 from "../../images/star2.svg";
import star3 from "../../images/star3.svg";
import arrow from "../../images/arrow.svg";
import star4 from "../../images/star4.svg";
import star5 from "../../images/star5.svg";
import star7 from "../../images/star7.svg";
import star6 from "../../images/star6.svg";
import star8 from "../../images/star8.png";
import star9 from "../../images/star9.png";
import star10 from "../../images/star10.png";
import manthinking from "../../images/manthinking.png";
import manandwoman from "../../images/manandwoman.png";
import goldmedal from "../../images/goldmedal.png";
import silvermedal from "../../images/silvermedal.png";
import bronzemedal from "../../images/bronzemedal.png";
import trophy from "../../images/trophy.png";
import purpleflare3 from "../../images/purpleflare3.svg";
import purpleflare4 from "../../images/purpleflare4.svg";
import purpleflare5 from "../../images/purpleflare5.png";
import purpleflare6 from "../../images/purpleflare6.png";
import purpleflare7 from "../../images/purpleflare7.png";
import purpleflare8 from "../../images/purpleflare8.png";
import purpleflare9 from "../../images/purpleflare9.png";
import purpleflare10 from "../../images/purpleflare10.png";
import purpleflare11 from "../../images/purpleflare11.png";
import libertyassured from "../../images/libertyassured.png";
import libertypay from "../../images/libertypay.png";
import winwise from "../../images/winwise.png";
import wisper from "../../images/wisper.png";
import boyunlock from "../../images/boyunlock.png";
import bigIdea from "../../images/bigIdea.svg";
import matrix from "../../images/matrix.png";

const Home = () => {
    return (
        <div className="home-container">
            <NavBar />
            <div className="hero-container-wrapper">
                <div className="purpleLens1">
                    <img src={purpleLens} alt="purple lens" />
                </div>
                <div className="purpleLens2">
                    <img src={purpleLens2} alt="purple lens" />
                </div>
                <div className="star" id="star1"><img src={star1} alt="sparkling star" /></div>
                <div className="star" id="star2"><img src={star2} alt="sparkling star" /></div>
                <div className="star" id="star3"><img src={star2} alt="sparkling star" /></div>
                <div className="hero-container">
                    <div className="top-text">Igniting a Revolution in HR Innovation <span>
                        <img src={Vector4} alt="purple line" />
                    </span></div>
                    <div className="hero-stn-text">
                        <h2>getlinked Tech<div id="bulb">
                            <img src={bulb} alt="light bulb" />
                        </div></h2>
                        <h2>Hackathon <span id="colored">1.0</span><div className="emojis">
                            <span><img src={chain} alt="chain emoji" /></span><span><img src={spark} alt="spark emoji" /></span>
                        </div></h2>
                        <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                        <div className="button"><Link>Register</Link></div>
                        <div className="countdown-timer">
                            <div>00<span>h</span></div>
                            <div>00<span>m</span></div>
                            <div>00<span>s</span></div>
                        </div>
                    </div>
                    <div className="boy-img">
                        <div className="matrix-img-wrapper">
                            <img src={matrix} alt="matrix" />
                        </div>
                        <div className="boy-img-wrapper">
                            <img src={boy} alt="boy wearing cool glasses" />
                        </div>
                        <div className="glow-ball-img-wrapper">
                            <img src={glowball} alt="shining ball" />
                        </div>
                    </div>
                </div>
            </div>
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
            <section className="timeline-container">
                <div className="stars star11"><img src={star5} alt="star" /></div>
                <div className="stars star12"><img src={star1} alt="star" /></div>
                <div className="stars star13"><img src={star2} alt="star" /></div>
                <h3>Timeline</h3>
                <p className="description">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                <div className="tl" id="tl1">
                    <div className="dets">
                        <h4>Hackathon Announcement</h4>
                        <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                    </div>
                    <div className="dates">November 18, 2023</div>
                    <div className="indicator">
                        1
                    </div>
                </div>
                <div className="tl" id="tl2">
                    <div className="dets">
                        <h4>Teams Registration begins</h4>
                        <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                    </div>
                    <div className="dates">November 18, 2023</div>
                    <div className="indicator">
                        2
                    </div>
                </div>
                <div className="tl" id="tl3">
                    <div className="dets">
                        <h4>Teams Registration ends</h4>
                        <p>Interested Participants are no longer Allowed to register</p>
                    </div>
                    <div className="dates">November 18, 2023</div>
                    <div className="indicator">
                        3
                    </div>
                </div>
                <div className="tl" id="tl4">
                    <div className="dets">
                        <h4>Announcement of the accepted teams and ideas</h4>
                        <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                    </div>
                    <div className="dates">November 18, 2023</div>
                    <div className="indicator">
                        4
                    </div>
                </div>
                <div className="tl" id="tl5">
                    <div className="dets">
                        <h4>Getlinked Hackathon 1.0 Offically Begins</h4>
                        <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                    </div>
                    <div className="dates">November 18, 2023</div>
                    <div className="indicator">
                        5
                    </div>
                </div>
                <div className="tl" id="tl6">
                    <div className="dets">
                        <h4>Demo Day</h4>
                        <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                    </div>
                    <div className="dates">November 18, 2023</div>
                    <div className="indicator">
                        6
                    </div>
                </div>
            </section>
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
            <footer>
                <div className="stars star29"><img src={star1} alt="star" /></div>
                <div className="stars star30"><img src={star2} alt="star" /></div>
                <div className="stars star31"><img src={star4} alt="star" /></div>
                <div className="stars star32"><img src={star1} alt="star" /></div>
                <div className="one">
                    <h2>get<span>linked</span></h2>
                    <p>
                        Getlinked Tech Hackathon is a technology innovation program
                        established by a group of organizations with the aim of showcasing
                        young and talented individuals in the field of technology
                    </p>
                    <div className="extras">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className="two">
                    <ul>
                        <li>Useful Links</li>
                        <li>Overview</li>
                        <li>Timeline</li>
                        <li>FAQs</li>
                        <li>Register</li>
                        <li><span>Follow us</span> <div className="icons-container">
                            <div className="socials-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white" />
                                </svg>
                            </div>
                            <div className="socials-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                    <path d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z" fill="white" />
                                </svg>
                            </div>
                            <div className="socials-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                                    <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#F8F8F8" />
                                </svg>
                            </div>
                            <div className="socials-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="#F8F8F8" />
                                </svg>
                            </div>
                        </div></li>
                    </ul>
                </div>
                <div className="three">
                    <div id="contact">Contact Us</div>
                    <div id="phone">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z" fill="#F8F8F8" />
                                <path d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z" fill="#F8F8F8" />
                            </svg>
                        </div>
                        <p>+234 679 81819</p>
                    </div>
                    <div id="location">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                                <path d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z" fill="#F8F8F8" />
                            </svg>
                        </div>
                        <p>
                            27,Alara Street
                            Yaba 100012
                            Lagos State
                        </p>
                    </div>
                </div>
                <p className="child-footer">All rights reserved. © getlinked Ltd.</p>
            </footer>
        </div>
    );
}

export default Home;