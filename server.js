require('dotenv').config();
const fs = require('fs');
const path = require('path');
//Express 
const express = require('express');
const app = express();
//DB
const db = require('./db');
db();
//CORS
const cors = require('cors');
app.use(cors());
// Body-Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//Auth 
const auth = require('./Authentication');
app.use('/app',auth);
//Stream the Logo
app.get('/image', (req, res) => {
    const imagePath = path.join(__dirname, 'images/logo.png');
    const stream = fs.createReadStream(imagePath);
  
    stream.on('open', () => {
      stream.pipe(res);
    });
  
    stream.on('error', (err) => {
      res.end(err);
    });
  });   
//PORT
const PORT = process.env.PORT || 5000;
//SERVER
app.listen(PORT,()=>{
    console.log(`Serving At : http://localhost:${PORT}`);
});




