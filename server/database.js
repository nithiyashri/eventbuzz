import mysql2 from 'mysql2';

const con = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eventbuzz'
});

export default con;
