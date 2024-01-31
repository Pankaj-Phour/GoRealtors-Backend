require('dotenv').config();
require('./config/db.js');
const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json({limit:'200mb'}));


const PropertyController = require('./controllers/allProperty.js');
const TeamController = require('./controllers/team.js');
const UserController = require('./controllers/contact.js');


const serverRefresher = ()=>{
    setInterval(() => {
      console.log("Wake up") 
    }, (14*60*1000));
}

serverRefresher();

app.get('/',(req,res)=>{
    res.send({
        code:200,
        message:'Backend is running successfully',
        response:{}
    })
})


app.get('/allProperties',PropertyController.allProperty);
app.get('/allAgents',TeamController.getTeam);
app.get('/allUsers',UserController.getUsers);

app.post('/postProperty',PropertyController.postProperty);
app.post('/addAgent',TeamController.addMember);
app.post('/contact',UserController.addUser);





app.listen(PORT, {cors:{origin:'*'}}, ()=>{
    console.log(`Conection established successfuly on http://localhost:${PORT}`);
})