import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Event.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Event() {
  let params = useParams();
  console.log(params)
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/events/${params.symp_id}`, {
        // fetch("http://localhost:8000/events/4005", {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setData(result['result']);

            })
            .catch((err) => { console.log(err); });
    }, [params.symp_id]);



    const [cookies,setCookies] = useCookies(['user']);
    const logOut = (event) => {
        alert("Are you sure that you want to sign out?");
        setCookies('loggedIn', false, { path: '/' });
    }
    
  return (
    <div>
          <div className='appnavbar'>
              <div class="dd">
                  <Link to="/Login" onClick={logOut}>Sign Out</Link>
                  <Link to="/Leaderboard">Leaderboard</Link>
              </div>
              <Link to="/Events">Events</Link>

              <Link to="/Home">Home</Link>
              {/* Add navbar code here */}
          </div>
          {data.map((user) => {
              return (
                  <div className='deptevent1'>
                      {/* <div className='dbox'>
                          <h2 id='name'>{user.event_name}</h2>
                          <h1>{user.event_description}</h1>
                          <p>Venue:{user.venue}</p><br></br>
                          <p>Date:{user.round1_date}</p><br></br>
                          <p>Time:{user.round1_time}</p><br></br>
                          <p>Prize:{user.prize}</p><br></br>
                          <button className='button'>Give feedback</button>
                          <span></span>

                      </div> */}








                      <div class="container3">

                          <div class="card-media">
                              <div class="card-media-object-container">
                                  <div class="card-media-object"></div>

                              </div>
                              <div class="card-media-body">
                                  <div class="card-media-body-top">
                                      <span class="subtle">Round 1 : {user.event_date} : {user.event_time}</span>
                                  </div>
                                  <span class="card-media-body-heading">{user.event_name}</span>
                                  <div class="card-media-body-supporting-bottom">
                                      <span class="card-media-body-supporting-bottom-text subtle">{user.venue}</span>
                                      <span class="card-media-body-supporting-bottom-text subtle u-float-right">{user.entry_fee?user.entry_fee:"free"}</span>
                                  </div>
                                  <div class="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                                      {/* <span class="card-media-body-supporting-bottom-text subtle">#Music #Party</span> */}
                                      <Link to="/feedback" className="card-media-body-supporting-bottom-text card-media-link u-float-right" onClick={()=>{
                                          setCookies('event_name',user.event_name,{path:'/'});
                                          setCookies('event_id', user.event_id, { path: '/' });
                                      }}>Give Feedback</Link>
                                  </div>
                              </div>
                          </div>



                      </div>













                  </div>
              )
          })} 









          











    </div>
  )
}

export default Event