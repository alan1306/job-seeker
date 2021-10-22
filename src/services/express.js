const express=require('express')
const config=require('../config')
const app=express()
const apiRouter=require('../routes/api');
var server = require('http').Server(app);

exports.start=()=>{
    server.listen(config.port,(err)=>{
        if (err){
            console.log(err);
            process.exit(-1)
        }
        console.log(`Server started at ${config.port}`);
    })
}
app.use(express.json());
app.use('/api',apiRouter);
app.get('/',(req,res)=>{
    res.send("hello There")
})

exports.app=app