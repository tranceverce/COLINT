var bodyParser = require('body-parser')
const express = require('express')
const Joi = require('joi')
const app = express()

app.use(bodyParser.json())

const faculties=[
    {id:1,"name":"Dr. Umesh Dutta","dept":"MRIIC"},
    {id:2,"name":"Ina Singh","dept":"MRIIC"},
    {id:3,"name":"Vikas Sharma","dept":"MRIIC"},
]

app.get('/faculties', function (req, res) {
      res.send(faculties)
    //   res.end()
    })

app.get('/faculties/:id', function (req, res) {
        const facultyid = parseInt(req.params.id)
        console.log(facultyid)
        const faculty = faculties.find((i)=>i.id===facultyid)
        if (!faculty){
            res.status(400).send('Record not found.')
        }
        res.send(faculty)
    })

app.post('/add', function (req, res) {
      const facultyname = Joi.object({name:Joi.string().min(3).required()})  
      const facultydept = Joi.object({dept:Joi.string().min(3).required()})
      const entry1=facultyname.validate({name:req.body.name})
      const entry2=facultydept.validate({dept:req.body.dept})  
      if (entry1.error || entry2.error){
        res.send(
            entry1.error.details[0].message||entry2.error.details[0].message
        )
      }
      const faculty={
        id:faculties.length+1,
        "name":req.body.name,
        "dept":req.body.dept
      }
      faculties.push(faculty)
      res.send(faculty)
      })

app.delete('/faculties/delete/:id', function (req, res) {
        const facultyid = parseInt(req.params.id)
        console.log(facultyid)
        const faculty = faculties.find((i)=>i.id===facultyid)
        if (!faculty){
            res.status(400).send('Record not found.')
        }
        faculties.splice(facultyid-1,1)
        res.send(faculties)
    })

app.put('/faculties/:id?', function (req, res) {
        const facultyid = parseInt(req.params.id)
        const edit = req.query.edit
        const faculty = faculties.find((i)=>i.id===facultyid)
        if (!faculty){
            res.status(400).send('Record not found.')
        }
        if(edit==="name"){
            const facultyname = Joi.object({name:Joi.string().min(3).required()})   
            const entry1=facultyname.validate({name:req.body.name})
            if(entry1.error){
                res.send(entry1.error.details[0].message)
            }
            faculties[facultyid-1].name=req.body.name
        }
        if(edit==="dept"){
            const facultydept = Joi.object({dept:Joi.string().min(3).required()})   
            const entry2=facultydept.validate({dept:req.body.dept})
            if(entry2.error){
                res.send(entry2.error.details[0].message)
            }
            faculties[facultyid-1].dept=req.body.dept
        }
        res.send(faculties[facultyid-1])
    })

app.listen(3000)