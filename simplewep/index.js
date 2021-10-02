const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('How are you doing ');
});

app.listen(8080, ()=>{
    console.log("8080 port ishlayabdi");
});


// Bu 38 video post ulashni o'rgatti expressda