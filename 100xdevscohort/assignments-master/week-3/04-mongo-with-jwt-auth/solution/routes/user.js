const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async(req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    try{
        const alreadyexists= await User.findOne({username:username})
        if (!alreadyexists){
            const newuser= new User({
                username:username,
                password:password
            })
            newuser.save().then(res.json({message:'User created successfully'}))
        }else{
            res.json({message:"user already exists"})
        }
    }catch(err){
        res.json({message:"invalid input"})
    }
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    try{
        const userfound= User.findOne({username:username,password:password})
        if (!userfound){
            res.json({message:"user not found"})
        } else{
            const token = jwt.sign(username,JWT_SECRET)
            res.json({token:token})
        }
    } catch(err){
        res.json({message:"invalid inputs"})
    }
    // Implement admin signup logic
});

router.get('/courses',userMiddleware, async(req, res) => {
    Course.then((data)=>{
        data.then((finaldata)=>{
            res.json({courses:finaldata})
        })
    })
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId= req.params.courseId;
    await User.updateOne({
        username:username
    },{
        '$push':{
            'purchasedcourses':courseId
        }
    })
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const username= req.username;
    const course= await User.findOne({
        username:username
    })
    const purchased=await User.find({
        _id:{
            $in:course.purchasedcourses
        }
    })
    res.json({purchasedCourses: purchased})
    // Implement fetching purchased courses logic
});

module.exports = router