import React from 'react';
import { Link } from 'react-router-dom'; 
import { useState , useEffect } from 'react';
import './Events.css'
import { useCookies } from 'react-cookie';


function Events() {
  const [cookies,setCookies] = useCookies(['user']);
  const [data,setData] = useState([]);
  const [data2,setData2] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/event1", {
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
    .catch((err)=> {console.log(err);});
  },[]);
  useEffect(() => {
    fetch("http://localhost:8000/event2", {
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
      setData2(result['result']);
      
    })
    .catch((err)=> {console.log(err);});
  },[]);


  const logOut = (event) => {
    alert("Are you sure that you want to sign out?");
    setCookies('loggedIn', false, { path: '/' });
  }
  return (
    <div className='eventspage'>
      <div className='appnavbar'>
        <div class="dd">
          <Link to="/Login" onClick={logOut}>Sign Out</Link>
          <Link to="/Leaderboard">Leaderboard</Link>
        </div>
        <Link to="/Events">Events</Link>

        <Link to="/Home">Home</Link>
        {/* Add navbar code here */}
      </div>
      <h1>Departments</h1>
      {data.map((user,index)=> {
        return (
          <div key={index} className="dept1">
            {/* <a href="/Home" >
              <img src={user.image} alt={user.dept_name} className="img1"/>
              <h2 id='dep'>{user.dept_name}</h2>
              <h3>{user.interclg_symp}</h3>
              <h3>{user.intraclg_symp}</h3>
              <h2>{user.email}</h2>
            </a> */}
            <a href="/Events" className='boxlink1'>
            <div className="cardBox">
              <div className="card">
                {/* <img src="image.jpg" alt="text"/> */}
                <img src={user.image} alt={user.dept_name} className="img1" /> 
                <h2 id='dep'>{user.dept_name}</h2>
                <h2 id="email1">{user.email}</h2>
                <span></span>
                <div className="content">
                    <h3><Link to={`/events1/${user.dept_id}`} onClick={()=>{
                      setCookies('e_type','department',{path:'/'});
                    }}>{user.interclg_symp}</Link></h3>
                    {/* <h3><Link to={`/events1/${user.dept_id}`} onClick={()=>{
                      setCookies('e_type', 'department', { path: '/' });
                    }}>{user.intraclg_symp}</Link></h3> */}
                </div>
              </div>
            </div>
            </a>
          </div>
        )
      })}
      <br />
      <h1>Clubs</h1>
        {data2.map((user,index)=> {
        return (
          <div key={index} className="dept1">
            {/* <a href="/Home" >
              <img src={user.image} alt={user.dept_name} className="img1"/>
              <h2 id='dep'>{user.dept_name}</h2>
              <h3>{user.interclg_symp}</h3>
              <h3>{user.intraclg_symp}</h3>
              <h2>{user.email}</h2>
            </a> */}
            <a href="/Events" className='boxlink1'>
            <div className="cardBox">
              <div className="card">
                {/* <img src="image.jpg" alt="text"/> */}
                <img src={user.image} alt={user.club_name} className="img1" /> 
                <h2 id='dep'>{user.club_name}</h2>
                <h2 id="email1">{user.email}</h2>
                <h3>{user.description}</h3>
                <span></span>
                <div className="content">
                    <h3><Link to={`/events/${user.club_id}`} onClick={()=>{
                      setCookies('e_type', 'club', { path: '/' });
                    }}>{user.flagship_event}</Link></h3>
                </div> 
              </div>
            </div>
            </a>
          </div>
        )})}
    </div>
    
  )
}


export default Events