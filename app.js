const express = require('express');
const path = require('path');
const app = express();
const PORT=3000;
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