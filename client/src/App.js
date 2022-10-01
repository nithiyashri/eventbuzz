import React from 'react';
import { BrowserRouter as Router, Link, Route , Routes } from 'react-router-dom';
import Login from './Login';
import Home from './routes/Home';
import Events from './routes/Events';
import ErrorPage from './routes/ErrorPage';
import DeptEvents from './routes/DeptEvents';
import Event from './routes/Event';
import Feedback from './routes/Feedback';
import './App.css'
import Leaderboard from './routes/Leaderboard';
import AddEvents from './routes/AddEvents';
import Event2 from './routes/Event2';
// import { useCookies } from 'react-cookie';
function App() {
  // const [cookies,setCookies] = useCookies(['user']);
  
  return (
    <Router>
      <div className="App">
        <div className="apppage">
          
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />}/> 
          <Route path="/events/:symp_id" element={<Event />}/>
          <Route path="/events1/:symp_id" element={<Event2 />} />
          <Route path="/deptevents" element={<DeptEvents />} />
          <Route path="/feedback" element={<Feedback />}/>
          <Route path="/leaderboard" element={<Leaderboard />}/> 
         <Route path="/addevents" element={<AddEvents />} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>

      {/* <h1>Hello world!</h1>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
      >
        <Link to="/Home">Home</Link> | {" "}
        <Link to="/Events">Events</Link>
      </nav>
      <Login />
      <Outlet /> */}
    </div>
    </Router>
  );
}

export default App;
