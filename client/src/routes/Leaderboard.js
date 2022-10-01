import React from 'react';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Leaderboard.css'

function Leaderboard() {
	const [cookies, setCookies] = useCookies(['user']);
    const [data,setData] = useState([]);
	const [data2,setData2] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/leaderboard", {
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
		fetch("http://localhost:8000/leaderboard2", {
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

    return(
        <div className='leaderpage'>
			<div className='appnavbar'>
				<div class="dd">
					<Link to="/Login" onClick={logOut}>Sign Out</Link>
					<Link to="/Leaderboard">Leaderboard</Link>
				</div>
				<Link to="/Events">Events</Link>

				<Link to="/Home">Home</Link>
				{/* Add navbar code here */}
			</div>
      <h2 className='dummy'> Leaderboard</h2><br></br>
	  <br></br> <br></br>
		<div className="leaderboard">
			<div className="hea">
				<i className="fas fa-crown"></i>
				<h1>Clubs</h1>
			</div>
			<div className="bod">
			<ul>
            {data.map((user,index)=> {
          	return (
						 <>
						<li>
						<mark>{index+1}</mark>
						<mark>{user.club_name}</mark>
						<small>{user.avg_rating}</small>
						</li>
						</>
					)}
			)}
			</ul>
			</div>
		</div>
		<div className="leaderboard2">
			<div className="hea">
				<i className="fas fa-crown"></i>
				<h1>Departments</h1>
			</div>
			<div className="bod">
			<ul>
            {data2.map((user,index)=> {
          	return (
						 <>
						<li>
						<mark>{index+1}</mark>
						<mark>{user.dept_name}</mark>
						<small>{user.avg_rating}</small>
						</li>
						</>
					)}
			)}
			</ul>
			</div>
		</div>
</div>
  
    )}
export default Leaderboard
