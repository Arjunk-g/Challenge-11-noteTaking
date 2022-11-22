const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');


app.get("/api/notes"'/', (req, res) => {
    console.info(`${req.method} request received for all stored notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});



app.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { username, topic, tip } = req.body;
  
    if (req.body) {
      const newTip = {
        username,
        tip,
        topic,
        tip_id: uuid(),
      };
  
      readAndAppend(newTip, './db/tips.json');
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });



module.exports = app;