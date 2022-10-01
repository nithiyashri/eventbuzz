import React from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
// import { Cookies } from 'react-cookie';

import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  const [cookies,setCookies] = useCookies(['user']);
  const [data,setData] = useState("false");
  const showMenu = (event) => {
    setData(!data);
  }

  const logOut = (event) => {
    alert("Are you sure that you want to sign out?");
    setCookies('loggedIn', false, { path: '/' });
  }
  
  return (
    <div className='homepage'>
      {/* <Link to="/Events" className='link1'>Events</Link>
      <Link to="/Login" className='link1'>Login</Link>
      <Link to="/ClubEvents" className='link1'>clubevents</Link> 
        <h2>Welcome to home page!</h2> */}
      <div className={`container ${data?"":"active"}`}>
        <div className="navbar">
          <div className="menu">
            <h3 className="logo">Event<span>Buzz</span></h3>
            <div className="hamburger-menu" onClick={showMenu}>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="main">
            <header>
              <div className="overlay">
                <div className="inner">
                  <h2 className="title">College club events rating system</h2>
                  <p>
                    Are you a fresher searching every club's instagram page to get updates of their events? Or Are you a senior waiting to welcome your juniors to your club to carry forward your legacy?
                    Or anyone who always has that competitive spirit? 
                  </p>
                  <h1>Welcome {cookies.u_name}</h1>
                </div>
              </div>
            </header>
          </div>

          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to="/Events" className='link1'>Events</Link>
            </li>
            {/* <li>
              <Link to="/Login" className='link1'>Login</Link>
            </li> */}
            
            {(cookies.isSpclAccess != 0) ? 
              <li>
                <Link to="/AddEvents" className='link1'>Add Events</Link>
              </li>
            : ""
            }
            <li>
              <Link to="/Leaderboard" className='link1'>Leaderboard</Link>
            </li>
            <li>
              <Link to="/Login" className='link1' onClick={logOut}>Log out</Link>
            </li>
            {/* <li>
              <Link to="/DeptEvents" className='link1'>deptevents</Link> 
            </li> */}

            
            {/* <li>
              <a href="/Events" style="--i: 0.2s;">Testimonials</a>
            </li>
            <li>
              <a href="/Events" style="--i: 0.25s;">About</a>
            </li>
            <li>
              <a href="/Events" style="--i: 0.3s;">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home