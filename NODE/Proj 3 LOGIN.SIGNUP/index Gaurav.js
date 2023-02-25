const {MongoClient, Collection} = require('mongodb');
const bodyParser = require('body-parser')
const express = require('express')
var passwordHash = require('password-hash');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/Hello', function (req, res) {
  res.send('Hello World')
})

app.get('/Login', function (req, res) {
    res.sendFile(__dirname+"/templates/login.html")
  })

app.post('/Login', function (req, res) {
    var user= req.body.user_id
    var mail= req.body.email_id
    var pass= req.body.pass_id
    var hpass = passwordHash.generate(pass);
    async function main(){
        const uri = "mongodb://127.0.0.1:27017/";
        const client = new MongoClient(uri);
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            const db = client.db("Authentication")
            const collection = db.collection('Users');
            // Make the appropriate DB calls
            // await  listDatabases(client);
            var count = await collection.findOne({Email: req.body.email_id});
            var dbpass = count.password;
            if(passwordHash.verify(pass,dbpass)===true){
            console.log("Login successful");
            res.send("Login successful");}
            else {
            console.log("Login failed");
            res.send("Login failed");
            }
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
    main().catch(console.error);
  })
app.get('/SignUp', function (req, res) {
    res.sendFile(__dirname+"/templates/signup.html")
  })
