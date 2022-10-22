const express = require('express')
const app = express()

app.get('/',(req , res) => {
    res.send('Hellow world')
})
app.get('/getname',(req ,res) =>{
    res.send('Krittin Hiangrat')
})
app.get('/getabout',(req , res) => {
    let data = {
        name: 'Krittin Hiangrat',
        age: 24,
        email: 'kaokong.spk@hotmail.com',
        address:'95 Witthayu Rd, Lumphini, Pathum Wan, Bangkok 10330'
    }
    res.send(data)
})
app.get('/getproject',(req , res) => {
    let data ={
        project_name : 'Capseer',
        project_description: 'Appication Capsoule Endoscopy uesing Ai',
        project_link:''
    }
    res.send(data)
})
app.get('/getcontact',(req , res) => {
    let data = {
        address:'95 Witthayu Rd, Lumphini, Pathum Wan, Bangkok 10330',
        email:'kaokong.spk@hotmail.com',
        phone_number:'0627578585'
    }
    res.send(data)
})
app.listen(3000 ,() => {
    console.log('Start server at port 3000.')
})

