/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';

// Importing user route
import router from './routes/users.js';
// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())
// Adding a Router
app.use('/users', router);

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect("mongodb://localhost:27017/jobdb" , {useNewUrlParser :true});
    
    const jobRequestSchema = new  mongoose.Schema({
       Name: String,
       Title: String,
       Price: String,
       Description: String,
       
     });

 const JobPost=mongoose.model("JobPost",jobRequestSchema);

 app.post('/jobDisplay', (req, res) => {    
    const g = JobPost.find(function(err, use){

      if(err){

          console.log('Check');

      }else{

       console.log('getting data for display');
      res.send(use);
      }

  });   
})

