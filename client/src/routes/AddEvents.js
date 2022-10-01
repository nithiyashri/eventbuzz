import React from 'react';
import { Link } from 'react-router-dom';
// import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import './AddEvents.css';

function AddEvents() {
  const [cookies,setCookies] = useCookies(['user']);
  // const profile = [{
  //   event_type:"",
  //   event_name:"",
  //   event_date:"",
  //   event_time:"",
  //   venue:"",
  //   entry_fee:"",
  //   fest_name:""
  // },];
  const [data, setData] = useState({
    event_type: "",
    event_name: "",
    event_date: "",
    event_time: "",
    venue: "",
    entry_fee: "",
    fest_name: ""
  });
  
  const handleName = (event) => {
    setData({ ...data,event_name: event.target.value });
  }
  const handleDate = (event) => {
    setData({ ...data, event_date: event.target.value });
  }
  const handleTime = (event) => {
    setData({ ...data, event_time: event.target.value });
  }
  const handleVenue = (event) => {
    setData({ ...data, venue: event.target.value });
  }
  const handleFee = (event) => {
    setData({...data,entry_fee:event.target.value});
  }
  const handleFest = (event) => {
    setData({...data,fest_name:event.target.value});
  }








  











  const [submitted,setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    fetch("http://localhost:8000/addevents1", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data,
        cookies,
        submitted
      })
    })
    .then((res) => res.json());
  }



//multiple counts

  // const [count,setCount] = useState(0);
  // const addBox = () => {
  //   setCount(count+1);
  //   setData((s) => [...s, {
  //     event_type: "",
  //     event_name: "",
  //     event_date: "",
  //     event_time: "",
  //     venue:"",
  //     entry_fee:"",
  //     fest_name:""
  //   }]);
  // };




//cookies

  // const [name, setName] = useState('');
  // const [pwd, setPwd] = useState('');
  // const [cookies, setCookie] = useCookies(['user']);

  // const handle = () => {
  //   setCookie('Name', name, { path: '/' });
  //   setCookie('Password', pwd, { path: '/' });
  // };

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
      {/* <button onClick={addBox}>Add more events</button> */}

      <form className='form23' onSubmit={handleSubmit}>
        <label className='label23' >Event Details</label>
        {/* <select id="event_type" name="event_type" required>
          <option value="">--Select--</option>
          <option value="symposium">Symposium</option>
          <option value="clubfests">Club Fests</option>

        </select> */}
        <input type="text" name="fest_name" placeholder="Symposium / Clubfest name" onChange={handleFest} required />
        <input type="text" name="event_name" placeholder="Event Name" onChange={handleName} required />
        <input type="date" name="event_date" placeholder="Event Date" onChange={handleDate} required />
        <input type="time" name="event_time" placeholder="Event Time" onChange={handleTime} required />
        <input type="text" name="venue" placeholder='Venue' onChange={handleVenue} required />
        <input type="number" name="entry_fee" placeholder="Entry Fee" onChange={handleFee} required />
        <button type="submit" >Add Event</button>
      </form>

      {/* <h1>Name of the user:</h1>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
        type="password"
        placeholder="name"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <div>
        <button onClick={handle}>Set Cookie</button>
      </div>
      <br />
      {cookies.Name && (
        <div>
          Name: <p>{cookies.Name}</p>
        </div>
      )}
      {cookies.Password && (
        <div>
          Password: <p>{cookies.Password}</p>
        </div>
      )} */}

      {/* {
        data.map((item,i) => {
          return (
            <div key={i}>
              <h2>Added event {i+1} details</h2>
            </div>
          )
        })
      } */}
    </div>
  )
}

export default AddEvents