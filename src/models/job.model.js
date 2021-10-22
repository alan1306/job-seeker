const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const User=require('../models/user.model')
const jobSchema=new Schema({
    recruiter:{
        type:mongoose.Types.ObjectId,
        ref:User,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:String,
    primary_role:{
        type:String,
        required:true
    },
    additional_roles:String,
    skills:[String],
    salary:[
        {
            currency:String,
            salary_lower_range:Number,
            salary_upper_range:Number
        }
    ],
    equity:[
        {
            equity_lower_range:Number,
            equity_upper_range:Number
        }
    ],
    work_experience:{
        type:String,
        require:true
    },
    job_type:{
        type:String,
        required:true
    },
    visa_required:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Job',jobSchema);