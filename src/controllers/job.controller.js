const Job=require('../models/job.model');
const User=require('../models/user.model')
const config=require('../config');
exports.addJob=async (req,res)=>{
    payload={username:config.testUser.username,password:config.testUser.password}
    console.log(payload);
    const recruiter=await User.findUser(payload)
    req.body.recruiter=recruiter._id
    const newJob=new Job(req.body)

    const createdJob=await newJob.save()

    res.json(createdJob);
}

exports.getAllJobs=async(req,res)=>{
    payload={username:'rtest',password:'rtest@123'}
    const recruiter=await User.findUser(payload)
    const allJobs=await Job.find({recruiter:recruiter._id})
    res.json(allJobs)
}