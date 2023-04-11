const express = require('express');
const path = require('path');
const uuid = require('./helpers/uuid');
const notes = require('./db/notes');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/api/notes', (req, res) => { res.status(200).json(reviews); });

// TODO: finish the code for adding notes via a request
app.post('/api/notes', (req, res) =>{
    console.info(`${req.method} notes request taken`);
// TODO: add checks to see if all feilds are populated

// TODO: then run a response to a successful note application

// TODO: add a response for any invalid submistion    

// TODO: add a function to throw a code if the sumbision is accepted or denied

})