const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    return res.sendFile(path.join(__dirname, '../public/index.html'))
  });
  
  app.get('/notes', (req, res) =>{
  return res.sendFile(path.join(__dirname, '../public/notes.html'))
  });

  module.exports = app;




// const { Router } = require('express');
// const path = require('path');
// // const express = require('express').Router();
// const app = require('express').Router();

// app.get('*', (req, res) =>{
//     res.sendFile(path.join(__dirname, './public/index.html'))
//   });
  
//   app.get('/notes', (req, res) =>{
//   return res.sendFile(path.join(__dirname, './public/notes.html'))
//   });

//   module.exports = Router;