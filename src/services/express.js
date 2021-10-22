const express=require('express')

const app=express()
const apiRouter=require('../routes/api');
var server = require('http').Server(app);

exports.start=()=>{
    server.listen(3000,(err)=>{
        if (err){
            console.log(err);
            process.exit(-1)
        }
        console.log("server started");
    })
}
app.use(express.json());
app.use('/api',apiRouter);
app.get('/',(req,res)=>{
    res.send("hello There")
})

exports.app=app