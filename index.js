const express = require("express")
const app=express()
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
const login_route=require("./routes/login")
const api_route=require("./routes/api")
const cookieParser=require('cookie-parser');


//connect to mongodb
const url = "mongodb+srv://learntothrive:myPassword@namasys.1i1ru.mongodb.net/namasys?retryWrites=true&w=majority"

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        app.listen(process.env.port|| 3000,()=>{
            console.log("listening at port 3000");
        })
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello, welcome to namasys api")
})

app.use("/login",login_route);
app.use("/api",api_route);
