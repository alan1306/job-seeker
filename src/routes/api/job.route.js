const router=require('express').Router()
const jobController=require('../../controllers/job.controller')

router.post('/add-job',jobController.addJob)
router.get('/get-all-jobs',jobController.getAllJobs)

module.exports=router;