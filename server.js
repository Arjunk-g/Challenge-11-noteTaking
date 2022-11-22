const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const HTMLRoute = require('./routes/HTMLroutes');
const APIRoute = require('./routes/APIRoutes');
// const router = express.Router();
const path = require('path');
const fs = require('fs');

// const api = require('./public/assets/js/index.js');

// Middleware for parsing JSON and urlencoded form data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', api);

// shows everything in public folder?
app.use(express.static('/public'));


app.use("/api", APIRoute);
app.use("/", HTMLRoute);


app.listen(PORT, () =>{
  console.log(`Take Notes Here http://localhost:${PORT} `)
});
