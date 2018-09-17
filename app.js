const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const cookieParser = require('cookie-parser');
const PORT=3000;


app.use(cookieParser());
app.use(express.static(__dirname+'/dist/'));


const port = process.env.PORT || 3000;

app.set('port' , port);


app.get('/api' , (req,res)=>{
    res.send("<h1>Hello World</h1>")
});


app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});


const server = http.createServer(app);

server.listen(port , ()=> {
  console.log('app up and running at : ' + port);
})