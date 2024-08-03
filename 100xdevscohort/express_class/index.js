const express= require("express");
const app= express();
app.use(express.json());
var users=[{
    name:"navkirat",
    kidneys:[{
        healthy:true
    },{
        healthy:true
    }]
}]
app.get("/", function(req,res){
    const john_kidneys= users[0].kidneys;
    const kidney_length= users[0].kidneys.length;
    let number_of_healthy_kidneys=0;
    for (let i=0;i<kidney_length;i++){
        if (john_kidneys[i].healthy==true){
            number_of_healthy_kidneys=number_of_healthy_kidneys+1;
        }
    }
    const number_of_unhealthy_kidneys= kidney_length-number_of_healthy_kidneys;
    res.json({
        kidney_length,
        number_of_healthy_kidneys,
        number_of_unhealthy_kidneys
    })
    
})
app.post("/",function(req,res){

    const isHealthy= req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"done"
    })
})
app.put("/", function(req,res){
    
    for (let i =0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})
app.delete("/", function(req,res){
    let unhealth=false;
    for (let i=0;i<users[0].kidneys.length;i++){
        if (users[0].kidneys[i].healthy==false){
            unhealth=true
        }
    }
    if (unhealth){
        const newkidneys=[];
    for (let i=0; i<users[0].kidneys.length;i++){
        if (users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidneys;
    res.json({msg:"done ji"})
    }else{
        res.status(411).json({error: "no unhealthy kidneys to remove"});
    }
    
    
})
app.listen(3009)