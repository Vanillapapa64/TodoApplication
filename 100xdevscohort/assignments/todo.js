const express= require("express");
const app = express()
const bodyparser= require('body-parser')
var array_todos=[]
app.use(bodyparser.json())
app.get('/todos',(req,res)=>{
    res.status(200).json(array_todos)
} );
app.post('/todos',(req,res)=>{
    const newtodo={
        id:Math.floor(Math.random()*1000),
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    };
    array_todos.push(newtodo)
    res.status(201).json(newtodo)
})
app.get('/todos/:id',(req,res)=>{
    const found = array_todos.find(t=> t.id === parseInt(req.params.id))
    if (found){
        res.status(200).json(found)
    } else {
        res.status(404).send()
    }
})
app.put('/todos/:id', (req,res)=>{
    const found = array_todos.find(t=> t.id === parseInt(req.params.id))
    if (found){
        const index= array_todos.findIndex(t=> t.id===parseInt(req.params.id));
        array_todos[index].title=req.body.title;
        array_todos[index].completed=req.body.completed;
        res.status(200).json(array_todos[index])
    } else {
        res.status(404).send()
    }
})
app.delete('/todos/:id', (req,res)=>{
    const index= array_todos.findIndex(t=> t.id === parseInt(req.params.id));
    if (index ===-1){
        res.status(404).send()
    } else {
        array_todos.splice(index,1);
        res.status(200).send()
    }
})
app.use((req,res,next)=>{
    res.status(404).send()
})
module.exports=app;