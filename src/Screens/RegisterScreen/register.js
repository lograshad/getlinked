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
import CustomDropdown from "../../components/dropdownMenu/drop";
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCategoryList, registerUser } from '../../actions/registerActions';

const RegisterPage = ({updateCurse, updateLeave}) => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchCategoryList());
    }, [dispatch]);
    const categories = useSelector((state) => state?.fetchCategories?.categories);
    const [email, setEmail]= useState();
    const [phone_number, setPhone_number] = useState()
    const [team_name, setTeam_name] = useState();
    const [group_size, setGroup_size] = useState();
    const [project_topic, setProject_topic] = useState();
    const [category, setCategory] = useState();
    const [privacy_policy_accepted, setPrivacy_policy_accepted] = useState(false);

    const handleSubmit = () => {
        updateLeave();
        // collating group_size as a numeric value
        let num = parseInt(group_size);
        dispatch(registerUser({
            email: `${email}`,
            phone_number: `${phone_number}`,
            team_name: `${team_name}`,
            group_size: num,
            project_topic: `${project_topic}`,
            category: category,
            privacy_poclicy_accepted: privacy_policy_accepted,
        }))
    }


    // collecting the category state through props from child component
    const handleDataFromChild = (data) => {
        setCategory(data);
    }
    return (
        <div className="register-container" id='register-container'>
            <NavBar 
                updateCurse={updateCurse}
                updateLeave={updateLeave}
            />
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
                        <div className="input-wrapper"><label>Team's Name</label><input type="text" placeholder='Enter the name of your group' onChange={(e)=> {setTeam_name(e.target.value)}}/></div>
                        <div className="input-wrapper"><label>Phone</label><input type="number" placeholder='Enter your phone number' onChange={(e)=> {setPhone_number(e.target.value)}}/></div>
                    </div>
                    <div className='form-child'>
                        <div className="input-wrapper"><label>Email</label><input type="text" placeholder='Enter your email address' onChange={(e)=> {setEmail(e.target.value)}}/></div>
                        <div className="input-wrapper"><label>Project Topic</label><input type="text" placeholder='What is your group project topic' onChange={(e)=> {setProject_topic(e.target.value)}}/></div>
                    </div>
                    <div className='form-child select-child'>
                        <div className="input-wrapper"><label>Category</label>
                        <CustomDropdown options={categories} updateCategory={handleDataFromChild}/>
                        </div>
                        <div className="input-wrapper"><label>Group Size</label><input type="number" onChange={(e)=> {setGroup_size(e.target.value)}}/></div>
                    </div>
                    <p id='caveat-text'>Please review your registration details before submitting</p>
                    <p id='checkbox-stn'>
                        <input type="checkbox" onChange={()=> {setPrivacy_policy_accepted(!privacy_policy_accepted)}}/>
                        <span>I agreed with the event terms and conditions  and privacy policy</span>
                    </p>
                </form>
                {/* input depends on backend */}
                <button onClick={handleSubmit} onMouseOver={updateCurse} onMouseLeave={updateLeave}>Register Now</button>
            </div>
        </div>
    )
}

export default RegisterPage;

  // if there's time, add formik