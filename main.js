const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose();
import "isomorphic-fetch"

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
let db = new sqlite3.Database(__dirname + '/model/robot.sqlite');

db.get("SELECT * FROM robots", function(err, row){
  console.log(row)
});

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/robot/:id', function(req, res){
  console.log("succeed access to " + req.params.id)
  res.render('robot', {robot_num: req.params.id});
})

app.get('/robot/:id/beep', function(req, res){
  let db = new sqlite3.Database(__dirname + '/model/robot.sqlite');
  let query = "SELECT ip FROM robots WHERE robotid=" + req.params.id;

  console.log(query)
  db.get(query, function(err, row){
    console.log("ffff")
    fetch("http://35.0.28.230" + ':3000/control/beep', { credentials: 'same-origin' })
      .then((response)=>{
        if (!response.ok) throw Error(response.statusText);
        console.log("fff")
        return response.json();
      })
      .then((data)=>{
        console.log("ffff")
      })
      .catch(error => console.log(error));
  });
});

// the url for up move
app.get('/robot/:id/up', function(req, res){
  let db = new sqlite3.Database(__dirname + '/model/robot.sqlite');
  let query = "SELECT ip FROM robots WHERE robotid=" + req.params.id;

  console.log(query)
  db.get(query, function(err, row){
    console.log("ffff")
    fetch("http://35.0.28.230" + ':3000/control/up', { credentials: 'same-origin' })
      .then((response)=>{
        if (!response.ok) throw Error(response.statusText);
        console.log("fff")
        return response.json();
      })
      .then((data)=>{

      })
      .catch(error => console.log(error));
  });
});


// stop the up
app.get('/robot/:id/upstop', function(req, res){
  let db = new sqlite3.Database(__dirname + '/model/robot.sqlite');
  let query = "SELECT ip FROM robots WHERE robotid=" + req.params.id;

  console.log(query)
  db.get(query, function(err, row){
    fetch("http://35.0.28.230" + ':3000/control/stop', { credentials: 'same-origin' })
      .then((response)=>{
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data)=>{
      })
      .catch(error => console.log(error));
  });
});

app.get('/robot/:id/reset', function(req, res){
  let db = new sqlite3.Database(__dirname + '/model/robot.sqlite');
  let query = "SELECT ip FROM robots WHERE robotid=" + req.params.id;

  console.log(query)
  db.get(query, function(err, row){
    fetch("http://35.0.28.230" + ':3000/control/reset', { credentials: 'same-origin' })
      .then((response)=>{
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data)=>{
      })
      .catch(error => console.log(error));
  });
});

app.get('/robot/:id/left', function(req, res){
  let db = new sqlite3.Database(__dirname + '/model/robot.sqlite');
  let query = "SELECT ip FROM robots WHERE robotid=" + req.params.id;

  console.log(query)
  db.get(query, function(err, row){
    fetch("http://35.0.28.230" + ':3000/control/left', { credentials: 'same-origin' })
      .then((response)=>{
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data)=>{
      })
      .catch(error => console.log(error));
  });
});

app.get('/robot/:id/right', function(req, res){
  let db = new sqlite3.Database(__dirname + '/model/robot.sqlite');
  let query = "SELECT ip FROM robots WHERE robotid=" + req.params.id;

  console.log(query)
  db.get(query, function(err, row){
    fetch("http://35.0.28.230" + ':3000/control/right', { credentials: 'same-origin' })
      .then((response)=>{
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data)=>{
      })
      .catch(error => console.log(error));
  });
});

app.get('/robot/:id/down', function(req, res){
  let db = new sqlite3.Database(__dirname + '/model/robot.sqlite');
  let query = "SELECT ip FROM robots WHERE robotid=" + req.params.id;

  console.log(query)
  db.get(query, function(err, row){
    console.log("ffff")
    fetch("http://35.0.28.230" + ':3000/control/down', { credentials: 'same-origin' })
      .then((response)=>{
        if (!response.ok) throw Error(response.statusText);
        console.log("fff")
        return response.json();
      })
      .then((data)=>{
        console.log("ffff")
      })
      .catch(error => console.log(error));
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

db.close();


