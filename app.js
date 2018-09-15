const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const PORT=3000;


app.use(cookieParser());

app.use(function (req, res, next) {
    let cookie = req.cookies.cookieName;
    if (cookie === undefined)
    {
      let timestamp=new Date().getTime();
      res.cookie('cookieName',timestamp, { httpOnly: true });
      console.log('cookie created successfully');
    } 
    else
    {
      console.log('cookie exists', cookie);
    } 
    next();
  });


app.use(express.static(path.join(__dirname,'dist')));

app.get('/api' , (req,res)=>{
    res.send("<h1>Hello World</h1>")
});

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});



app.listen(PORT, ()=>{
    console.log("App up and running . Listening to Port : " + PORT);
});