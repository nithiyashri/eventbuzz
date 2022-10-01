import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Cookies } from 'react-cookie';
import { useCookies } from 'react-cookie';
import './Feedback.css'
import { useNavigate } from "react-router-dom";
function Feedback() {
  const [cookies, setCookies] = useCookies(['user']);
  const [submitted, setSubmitted] = useState(false);
  const handlefb = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(cookies.event_id);
    fetch("http://localhost:8000/givefb", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values,
        cookies,
        submitted
      })
    })
      .then((res) => res.json());
    alert('feedback submitted!');
    
    navigate(0);
  }
  // const [cookies,setCookies] = useCookies(['user']); 
  let navigate = useNavigate();
  const [values, setValues] = useState({
        user_id:"",
        event_id:"",
        star_rating:"",
        comments:""
      });
      const handleFeedback = (event) => {
        setValues({ ...values, user_id:cookies.user_id,event_id:cookies.event_id,comments: event.target.value ,});
      }
      const handleRatings = (event)=> {
        setValues({...values,star_rating:event.target.value});
      }
  const [data, setData] = useState([]);
    useEffect(() => {
      // setCookies('event_name', user.event_name, { path: '/' })
      fetch("http://localhost:8000/getevent", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cookies,
          values
        })
      })
      .then((res) => {
        return res.json()
      })
      .then((res)=>{
        let access = res['result2'];
        setData(access);

        let access2 = res['result'];
        // setCookies('event_id',access2[0].event_id,{path:'/'});
      })

        // fetch("http://localhost:8000/fb", {
        //     method: 'get',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((result) => {
        //         setData(result['result']);

        //     })
        //     .catch((err) => { console.log(err); });
    }, [cookies,setCookies,submitted,values]);
    
  const logOut = (event) => {
    alert("Are you sure that you want to sign out?");
    setCookies('loggedIn', false, { path: '/' });
  }
   
  return (
    <div>
    <div className='box'>
      <div className='appnavbar'>
        <div class="dd">
          <Link to="/Login" onClick={logOut}>Sign Out</Link>
          <Link to="/Leaderboard">Leaderboard</Link>
        </div>
        <Link to="/Events">Events</Link>

        <Link to="/Home">Home</Link>
        {/* Add navbar code here */}
      </div>


	
  <div class='header'>

<span className='ffont'>Give your feedback:</span>


</div>

<form>
    <input type="text" name="comments" placeholder='Enter your Comment' onChange={handleFeedback} className='comm' required/>
    {/* <input type="number" name="star_rating" placeholder='Ratings' min="1" max="5" onChange={handleRatings}/> */}
<fieldset class="rating">
    <input type="radio" id="star5" name="star_rating" value="5" onChange={handleRatings} /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
    {/* <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label> */}
    <input type="radio" id="star4" name="star_rating" value="4" onChange={handleRatings}/><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
    {/* <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label> */}
    <input type="radio" id="star3" name="star_rating" value="3" onChange={handleRatings} /><label class = "full" for="star3" title="Meh - 3 stars"></label>
    {/* <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label> */}
    <input type="radio" id="star2" name="star_rating" value="2" onChange={handleRatings}/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
    {/* <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label> */}
    <input type="radio" id="star1" name="star_rating" value="1" onChange={handleRatings}/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
    {/* <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label> */}
</fieldset>
    <button type='submit' onClick={handlefb}>SUBMIT</button>
</form>


        <div class="comments-container">
          <span className='ffont'>Previous feedbacks and comments:</span>
          {data.map((user) => {
            return (
              <ul id="comments-list" className="comments-list">
                <li>
                  <div class="comment-main-level">
                    <div class="comment-box">
                      <div class="comment-head">
                        <h6 class="comment-name by-author">User_id:{user.user_id}</h6>
                        <i class="fa fa-reply"></i>
                        <i class="fa fa-heart"></i>
                      </div>
                      <div class="comment-content">
                        {user.comments}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            )
          })}
        </div>


</div>
</div>
  )
  }

export default Feedback
