const express = require('express')
const app = express()




app.get('/', function (req, res) {
    //   res.send('Home Page')
      res.sendFile(__dirname+'/templates/1.html')
    })

app.listen(3000)