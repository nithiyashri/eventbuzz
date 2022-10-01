import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Login.css'


function Login() {
  const [cookies, setCookies] = useCookies(['user']);
  //signup page submission handling
  const [values, setValues] = useState({
    u_name:"",
    email:"",
    password:"",
    dob:"",
    college:"",
    u_type:"",
    mob_no:""
  });

  const handleNameChange = (event) => {
    setValues({...values,u_name:event.target.value})
  }
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value })
  }
  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value })
  }
  const handleDobChange = (event) => {
    setValues({...values,dob: event.target.value})
  }
  const handleCollegeChange = (event) => {
    setValues({...values,college: event.target.value})
  }
  const handleTypeChange = (event) => {
    setValues({...values,u_type: event.target.value})
  }
  const handleMobileChange = (event) => {
    setValues({...values,mob_no: event.target.value})
  }

  const [submitted, setSubmitted] = useState(false);
  const handleSignup = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // signup page validation
    setCookies('u_name',values.u_name,{path:'/'});
    setCookies('email',values.email,{path:'/'});
    fetch("http://localhost:8000/api1" , {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values,
        submitted
      })
    })
    .then((res) => {
      return res.json()
    })
    .then ((res)=> {
      console.log(res);
      const sgndata = res['result2'];
      console.log(sgndata[0]);
      setCookies('user_id',sgndata[0].user_id,{path:'/'});
      setCookies('loggedIn', true, { path: '/' });
      // if (sgndata.spl_access === 1) {
      //   setCookies('isSpclAccess', '1', { path: '/' });
      // } else if (sgndata.spl_access === 2) {
      //   setCookies('isSpclAccess', '2', { path: '/' });
      // } else {
      //   setCookies('isSpclAccess', '0', { path: '/' });
      // }
      console.log(cookies);
    })
  }

  // login page validation handling
  const [loginValues,setLoginValues] = useState({
    email:"",
    password:""
  });
  const handleLoginEmailChange = (event) => {
    setLoginValues({...loginValues,email:event.target.value})
  }
  const handleLoginPasswordChange = (event) => {
    setLoginValues({...loginValues,password:event.target.value})
  }
  console.log(loginValues);
  const [submitted2, setSubmitted2] = useState(false);
  
  // if (!submitted2) {
  //   document.getElementsByClassName('appnavbar')[0].style.display = "none";
  // }
  const handleLogin = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/api2', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginValues)
    })
    .then((res) => {
      return res.json();
      // setLoginValues(res['res']);
      
    })
    .then((res)=> {
      let access = res['result2'][0];
      if (access.password===loginValues.password) {
        setSubmitted2(true);
        setCookies('loggedIn', true, { path: '/' });
        console.log("login successful");
        console.log(cookies.loggedIn);
      }
      return access;
    })
    .then((access) => {
      setCookies('email',access.email,{ path : '/'});
      setCookies('u_name',access.u_name,{path:'/'});
      if (access.spl_access===1) {
        setCookies('isSpclAccess','1',{path:'/'});
      }else if (access.spl_access===2) {
        setCookies('isSpclAccess','2',{path:'/'});
      }else{
        setCookies('isSpclAccess','0',{path:'/'});
      }
      console.log(cookies.isSpclAccess);
    })
    .catch((err) => {
      console.log(err);
    });

  }

  



  let navigate = useNavigate();
  useEffect(() => {
    if (submitted2 || submitted) {
      return navigate("/home");
    }
  }, [submitted2,submitted,navigate]);








  // return (
  //   <div className="form-container">
  //       <form>
  //       {submitted ? <div className="msg">Successfully submitted</div> : null}
  //           Username:
  //           <input type="text" name="u_name" value={values.u_name} onChange={handleNameChange}/>
  //           <br />
  //           Email:
  //           <input type="text" name="email" value={values.email} onChange={handleEmailChange}/>
  //           <br />
  //           Password:
  //           <input type="text" name="password" value={values.password} onChange={handlePasswordChange}/>
  //           <br />
  //       <button className="form-field" type="submit" onClick={handleSubmit}>Submit form</button>

  //       </form>
  //   </div>
  // )



  return (
    <div className='form-container1'>
      <div className="main1">
        <input type="checkbox" id="chk" aria-hidden="true"/>

          <div className="signup">
          <form onSubmit={handleSignup}>
            {submitted ? <div className="msg">Successfully submitted</div> : null}
            <label for="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="u_name" placeholder="User name" onChange={handleNameChange} required />
            <input type="email" name="email" id="check1" placeholder="Email" onChange={handleEmailChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} required />
            <input type="date" name="dob" placeholder="DOB" onChange={handleDobChange} required />
            <input type="text" name="college" placeholder="College" onChange={handleCollegeChange} required />
            <select id="u_type" name="u_type" onChange={handleTypeChange} required>
              <option value="">--Select--</option>
              <option value="student">Student</option>
              <option value="staff">Staff</option>
              <option value="alumni">Alumni</option>
              <option value="other">Other</option>
            </select>
            <input type="number" name="mob_no" placeholder="Mobile" onChange={handleMobileChange} required />

            <button type="submit">Sign up</button>
                  </form>
                </div>

                <div className="login">
                      <form onSubmit={handleLogin}>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required onChange={handleLoginEmailChange} />
                        <input type="password" name="password" placeholder="Password" required onChange={handleLoginPasswordChange} />
                        <button type="submit">Login</button>
                        {submitted2?<h4>Logged in successfully</h4>:null}
                      </form>
                    </div>
                </div>
    </div>
  )
}

export default Login