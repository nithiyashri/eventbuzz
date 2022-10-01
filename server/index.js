import express from 'express';
import cors from "cors";

import con from './database.js';
import e from 'express';
const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

con.connect(err => {
  if (err) {
    console.log("connection error");
    return err;
  }
});
// import bcrypt from 'bcrypt'
// const password="shggs12"
// const hashed_password=bcrypt.hashSync(password,17);
// console.log(hashed_password);
// console.log(bcrypt.compareSync(password,hashed_password))

// app.get('/users', (req, res) => {
//   con.query('select * from users', (err, result, fields) => {
//     res.send(result);
//   });
// });


app.get('/events/:symp_id',(req,res)=>{
  console.log(req.params);
    con.query(`select * from club_fests natural join club_events natural join clubs where clubs.club_id=${req.params.symp_id}`,(err,result,fields)=>{ 
      if (err) {
        console.log(err);
      }
      res.status(200).json({result});
    })
})
app.get('/events1/:symp_id', (req, res) => {
  console.log(req.params);
  con.query(`select * from symposiums natural join dept_events natural join departments where departments.dept_id=${req.params.symp_id}`, (err, result, fields) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({ result });
  })
})

app.post('/api1',(req,res) => {
  var data = req.body.values;
  con.query("INSERT INTO user_credentials SET ?",data,(err,result) => {
    console.log(req.body);
    if (err) {
      console.log(err);
    }
    // console.log(req.body.values.u_name);
    // res.status(200).json({ result });
    

    });
  con.query(`SELECT * from user_credentials WHERE u_name='${data.u_name}'`, (err, result2) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({ result2 });
  });
  
})

app.get('/event1', (req, res) => {
  var query = con.query("SELECT * from departments", (err, result,fields) => {
   
    if (err) {
      console.log("selection error");
    }
  
 
  res.status(200).json({result});
});
})



app.post('/api2', (req,res) => {
  var data=req.body;
  var query2 = con.query(`SELECT * from user_credentials where email='${req.body.email}'`, (err,result2,fields) => {
    if (err) {
      console.log("login selection error");
    }
    // if (data.password==result2[0].password) {
    //   res.redirect(301,'/client/src/Home');
    // }else {
    //   console.log("Wrong password");
    // }
    console.log(result2[0]);
    res.status(200).json({result2});
  })
});

app.get('/deptevent', (req, res) => {
  var query = con.query("SELECT * from dept_events", (err, result,fields) => {
   
    if (err) {
      console.log("selection error");
    }
  
 
  res.status(200).json({result});
});
})

app.get('/leaderboard', (req, res) => {
  var query = con.query("SELECT AVG(avg_rating) as avg_rating,clubs.club_name FROM club_events NATURAL JOIN club_fests NATURAL JOIN clubs GROUP BY clubs.club_id ORDER BY AVG(avg_rating) DESC;", (err, result,fields) => {
   
    if (err) {
      console.log("selection error");
    }
  
 
  res.status(200).json({result});
});
})

app.get('/leaderboard2', (req, res) => {
  var query = con.query("SELECT AVG(dept_events.avg_rating) as avg_rating,departments.dept_name FROM dept_events NATURAL JOIN symposiums NATURAL JOIN departments GROUP BY departments.dept_id ORDER BY avg_rating DESC;", (err, result,fields) => {
   
    if (err) {
      console.log("selection error");
    }
  
 
  res.status(200).json({result});
});
})

app.get('/event2', (req, res) => {
  var query = con.query("SELECT * from clubs", (err, result,fields) => {
   
    if (err) {
      console.log("selection error");
    }
  
 
  res.status(200).json({result});
});
});
app.post('/addevents1', (req, res) => {
  var data1 = req.body.data;
  var etype = req.body.cookies.e_type;
  var sql;
  
  if (etype=="department") {
    con.query(`SELECT symposiums.symp_id FROM symposiums WHERE symposiums.symp_name='${data1.fest_name}'`, (err, result21) => {
      if (err) {
        console.log(err);
      }
      const formdata1 = {
        event_name: data1.event_name,
        symp_id: result21[0].symp_id,
        round1_date: data1.event_date,
        round1_time: data1.event_time,
        round2_date: "2022-06-30",
        round2_time: "10:30",
        venue: data1.venue,
        avg_rating: 0
      };
      console.log(formdata1);
      sql = "INSERT INTO dept_events SET ?";
      con.query(sql, formdata1, (err, result22) => {
        if (err) {
          console.log(err);
          console.log("table insertion error1");
        }
        console.log(etype);
        console.log(result22);
      })
    })
    
  }else if (etype=="club") {
    con.query(`SELECT club_fests.fest_id FROM club_fests WHERE club_fests.fest_name='${data1.fest_name}'`,(err,result11)=>{
      if (err) {
        console.log(err);
      }
      console.log(result11[0]);
      const formdata2 = {
        event_name: data1.event_name,
        fest_id: result11[0].fest_id,
        event_date: data1.event_date,
        event_time: data1.event_time,
        venue: data1.venue,
        entry_fee: data1.entry_fee,
        avg_rating: 0
      };
      console.log(formdata2);
      sql = "INSERT INTO club_events SET ?";
      con.query(sql, formdata2, (err, result12) => {
        if (err) {
          console.log(err);
          console.log("table insertion error2");
        }
        console.log(result12);
      })
    })
    // const formdata2 = {
    //   event_name: data1.event_name,
    //   fest_id: result11[0].fest_id,
    //   event_date: data1.event_date,
    //   event_time: data1.event_time,
    //   venue: data1.venue,
    //   entry_fee: data1.entry_fee,
    //   avg_rating: 0
    // };
    // console.log(formdata2);
    // sql = "INSERT INTO club_events SET ?";
    // con.query(sql, formdata2, (err, res) => {
    //   if (err) {
    //     console.log(err);
    //     console.log("table insertion error2");
    //   }
    // })
  }
  res.status(200).json({ message: "Posted successfully" });
})

//leaderboard
app.get('/leaderboard', (req, res) => {
  var query = con.query("SELECT AVG(avg_rating) as avg_rating,clubs.club_name FROM club_events NATURAL JOIN club_fests NATURAL JOIN clubs GROUP BY clubs.club_id ORDER BY AVG(avg_rating) DESC;", (err, result, fields) => {

    if (err) {
      console.log("selection error");
    }


    res.status(200).json({ result });
  });
})

app.get('/leaderboard2', (req, res) => {
  var query = con.query("SELECT AVG(dept_events.avg_rating) as avg_rating,departments.dept_name FROM dept_events NATURAL JOIN symposiums NATURAL JOIN departments GROUP BY departments.dept_id ORDER BY avg_rating DESC;", (err, result, fields) => {

    if (err) {
      console.log("selection error");
    }


    res.status(200).json({ result });
  });
})

// app.get('/fb', (req, res) => {
//   var query = con.query("SELECT * from feedback", (err, result, fields) => {

//     if (err) {
//       console.log("selection error");
//     }


//     res.status(200).json({ result });
//   });
// })

app.post('/givefb', (req, res) => {
  var data = req.body.values;
  con.query("INSERT INTO feedback SET ?", data, (err, res) => {
    if (err) {
      console.log("table insertion error");
      console.log(err);
    }
  });
  con.query("UPDATE club_events natural join feedback SET club_events.avg_rating=(SELECT AVG(feedback.star_rating) from feedback WHERE feedback.event_id=club_events.event_id) WHERE feedback.event_id=club_events.event_id",(err,result3)=>{
    if (err) {
      console.log(err);
    }
    console.log(result3);
  })
  res.status(200).json({ message: "Posted successfully" });
})
app.post('/getevent',(req,res)=> {
  var data=req.body.cookies;
  var sql;
  if (data.e_type=="department") {
    sql = `SELECT event_id from dept_events where event_name='${data.event_name}'`;
  }else if (data.e_type=="club") {
    sql = `SELECT event_id from club_events where event_name='${data.event_name}'`;
  }
    con.query(sql,(err,result)=> {
    if (err) {
      console.log(err);
    }
    
    con.query(`select * from feedback where event_id='${result[0].event_id}'`, (err2,result2) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json({ result,result2 });
    })
  });
})

app.listen(8000, () => {
  // con.connect((err) => {
  //   if (err) throw err;
  // });
  console.log('server up');
});
