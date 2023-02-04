var bodyParser = require('body-parser')
const express = require('express')
const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://divij:Divijkumar@cluster0.5vctazg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const app = express()
app.use(bodyParser.urlencoded({ extended: true })) // true for form handling, false for json data

app.get('/', function (req, res) {
//   res.send('Home Page')
  res.sendFile(__dirname+'/templates/index.html')
})

app.get('/about', function (req, res) {
//   res.send('About Page')
  res.sendFile(__dirname+'/templates/about.html')
})

  
app.get('/contact', function (req, res) {
//   res.send('Contact Page')
  res.sendFile(__dirname+'/templates/contact.html')
})

app.post('/contact', function (req, res) {
    //   res.send('Contact Page')
    var x = console.log(req.body.myname);
    var y = console.log(req.body.myemail);
    var z = console.log(req.body.mymessage);
    
    const dbName = 'Comtact';
    async function run() {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('documents');
      
        const insertResult = await collection.insertOne({"Name": req.body.myname, "Email":req.body.myemail, "comment":req.body.mymessage })    
        console.log('Inserted documents =>', insertResult);
  
        return 'done.';
      }
    

    run()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())
    
    
    res.sendFile(__dirname+'/templates/contact.html')
    })
  
  app.get('/news', function (req, res) {
      //   res.send('Contact Page')
        res.sendFile(__dirname+'/templates/newsletter.html')
      })

app.listen(3000)