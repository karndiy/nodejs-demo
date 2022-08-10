var express = require('express')
var cors = require('cors')
var app = express()
var PORT = process.env.PORT || 8080
 
app.use(cors())

app.get("/", (req, res)=>{
    res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.get('/data/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!',
            result: "ok",
            data:[1,2,3,4,5]})
})
 
app.listen(PORT, function () {
  console.log(`Serer is running. ${PORT}`)
})