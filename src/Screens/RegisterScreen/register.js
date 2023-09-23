import './register.css';
import star1 from "../../images/star1.svg";
import star2 from "../../images/star2.svg";
import star4 from "../../images/star4.svg";
import star5 from "../../images/star5.svg";
import purpleflare13 from "../../images/purpleflare13.png";
import purpleflare12 from "../../images/purpleflare12.png";
import boyshowingthumbsup from "../../images/boyshowingthumbsup.png";
import emojiboy from "../../images/emojiboy.png";
import emojigirl from "../../images/emojigirl.png";
import NavBar from '../../components/navbar/navbar';

const RegisterPage = () => {
    return (
        <div className="register-container" id='register-container'>
            <NavBar />
            <div className="stars star1"><img src={star4} alt="star" /></div>
            <div className="stars star2"><img src={star2} alt="star" /></div>
            <div className="stars star3"><img src={star2} alt="star" /></div>
            <div className="stars star4"><img src={star5} alt="star" /></div>
            <div className="stars star5"><img src={star1} alt="star" /></div>
            <div className="flares flare1"><img src={purpleflare12} alt="purple flare" /></div>
            <div className="flares flare2"><img src={purpleflare13} alt="purple flare" /></div>
            <div className='img-wrapper'>
                <img src={boyshowingthumbsup} alt="graphics designer showing thumbs up" />
            </div>
            <div className='form-stn'>
                <p id='register-text'>Register</p>
                <div className="movement">
                    <p>Be part of this movement!</p>
                    <div className="emoji-container">
                        <div className="emoji-wrapper"><img src={emojigirl} alt="girl emoji" /></div>
                        <div className="emoji-wrapper"><img src={emojiboy} alt="boy emoji" /></div>
                    </div>
                </div>
                <p id='weird-text2'>CREATE YOUR ACCOUNT</p>
                <form action="post">
                    <div className='form-child'>
                        <div className="input-wrapper"><label>Team's Name</label><input type="text" placeholder='Enter the name of your group'/></div>
                        <div className="input-wrapper"><label>Phone</label><input type="text" placeholder='Enter your phone number'/></div>
                    </div>
                    <div className='form-child'>
                        <div className="input-wrapper"><label>Email</label><input type="text" placeholder='Enter your email address'/></div>
                        <div className="input-wrapper"><label>Project Topic</label><input type="text" placeholder='What is your group project topic'/></div>
                    </div>
                    <div className='form-child select-child'>
                        <div className="input-wrapper"><label>Category</label><input type="text" /></div>
                        <div className="input-wrapper"><label>Group Size</label><input type="text" /></div>
                    </div>
                    <p id='caveat-text'>Please review your registration details before submitting</p>
                    <p id='checkbox-stn'>
                        {/* checkbox */}
                        <span>I agreed with the event terms and conditions  and privacy policy</span>
                    </p>
                </form>
                {/* input depends on backend */}
                <button>Register Now</button>
            </div>
        </div>
    )
}

export default RegisterPage;

  // if there's time, add formik