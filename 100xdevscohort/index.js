const express = require('express')
const app = express()
const port = process.env.PORT

app.post('/conversation', function(req, res) {
    const message= req.query.message;
    console.log(message);
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
})