const uuid = require('../helpers/uuid');
const express = require('express');
const app = express();
const fs = require('fs');


app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for all stored notes`);

    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});



app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { note } = req.body;
  
    if (req.body) {
      const newNote = {
        note,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, '../db/db.json');
      res.json(`Note added`);
    } else {
      res.error('Error in adding a note');
    }
  });



module.exports = app;