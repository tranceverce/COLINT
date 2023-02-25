var bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');
const fs = require('fs')
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
    //   res.send('Home Page')
    res.sendFile(__dirname + '/templates/home.html')
})


app.post('/', async function (req, res) {
            const user = req.body.user_name
            const mail = req.body.email_id
            const num = req.body.bill_am
            const sdate = req.body.sdate
            const edate = req.body.edate

            // Create a new pdf document which will get saved by the name entered 
            var doc = new PDFDocument();
            const stream = doc.pipe(fs.createWriteStream("pdfs/" + user + ".pdf"));
            doc.image('https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bharat_BillPay_logo.svg/2560px-Bharat_BillPay_logo.svg.png', {
                fit: [250, 300],
                align: 'left',
                valign: 'center'
              });
            doc.fontSize(25).text(user, 100, 80);
            doc.moveDown();
            doc.text(`Email - ${mail}`, {
                width: 410,
                align: 'left'
            });
            doc.moveDown();
            doc.text(`Bill Amount - ${num}`, {
                width: 410,
                align: 'left'
            });
            doc.end();

            // Send Emails
            // var mailOptions = {
            //     from: 'youremail@gmail.com',
            //     to: 'myfriend@yahoo.com',
            //     subject: 'Sending Email via Node.js',
            //     text: 'That was easy!',
            //     attachments: [{ // use URL as an attachment
            //         filename: 'Bill',
            //         path: 'pdfs/' + user + ".pdf"
            //     }],

            //     mail.sendMail(mailOptions, function (error, info) {
            //         if (error) {
            //             console.log(error);
            //         } else {
            //             console.log('Email sent: ' + info.response);
            //         }
            //     });
            })

        app.listen(3000)