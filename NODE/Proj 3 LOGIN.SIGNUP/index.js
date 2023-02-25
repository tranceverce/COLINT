// REQUIREMENTS FOR THE PROJECT
const bodyParser = require('body-parser')
const express = require('express')
const bcrypt = require('bcrypt')
const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))



// GET REQUESTS
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/templates/1st.html")
})

app.get('/Login', function (req, res) {
  res.sendFile(__dirname + "/templates/login.html")
})


app.get('/SignUp', function (req, res) {
  res.sendFile(__dirname + "/templates/signup.html")
})

// POST REQUESTS
app.post('/Login', function (req, res) {
  var mail = req.body.user_email
  var pass = req.body.user_password
  console.log(mail)
  console.log(pass)


  res.sendFile(__dirname + "/templates/login.html")
})

app.post('/SignUp', function (req, res) {
  var mail = req.body.user_email
  var pass = req.body.user_password
  console.log(mail)
  console.log(pass)


  res.sendFile(__dirname + "/templates/login.html")
})

app.listen(3000)