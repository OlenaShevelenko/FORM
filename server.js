const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');
const dataRoute = require ('./Fetch')
const bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

require('dotenv').config();

app.use('/', dataRoute)


mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://shevelenko31:Z7C9iiPnhAqVLGVl@cluster0.9ifsqzf.mongodb.net/?retryWrites=true&w=majority')

app.use (dataRoute);

const PORT = 2000;

app.listen (PORT, () =>{
    console.log(`IT'S WORKING ON PORT ${PORT}`)
})