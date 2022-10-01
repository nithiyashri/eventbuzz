import React from 'react'
import { useState , useEffect } from 'react';
import './DeptEvents.css'


function DeptEvents() {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/deptevent", {
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
 
  return (
    <div className='depteventspage'>
      <h2>Symposium Events</h2>
        {data.map((user)=> {
          return (
            <div className='deptevent1'>
              <div className='dbox'>
              <h2 id='name'>{user.event_name}</h2>
              <h1>{user.event_description}</h1>
              <p>Venue:{user.venue}</p><br></br>
              <p>Date:{user.date}</p><br></br>
              <p>Prize:{user.prize}</p><br></br>
              <button className='button'>Give feedback</button>
              <span></span>

            </div>
            </div>
          )
        })} 
    </div>
  )
}

export default DeptEvents