const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');


//middleware ekk..api ekk call kranakota ..e request ekata data ekk attach karala ewanna puluwan(front eka paththen)
//apu request ekata adala response ekk hadaganna oni..eka yawanna oni...e request responce walata adala lifecycle ekata
//yamkisi wenasak karanna middle wares use karanwa..[cors middleware] 
app.use(cors());   //block eka aine kala simply...

app.use(
    express.urlencoded({
        extended: true,
    })
);

//json form eken data share wenne
app.use(express.json());


app.get('/users',(req, res) => {
    controller.getUsers((req,res,next) =>{
       res.send();
    });
});



app.post('/createuser',(req, res) => {

    controller.addUsers(req.body,(callback) =>{
        res.send();
    });
});

//app.put('/updateuser',(req, res) => {
app.post('/updateuser',(req, res) => {

    controller.updateUsers(req.body,(callback) =>{
        res.send(callback);
    });
});

//app.delete('/deleteuser',(req, res) => {
app.post('/deleteuser',(req, res) => {

    controller.deleteUsers(req.body,(callback) =>{
        res.send();
    });
});
module.exports = app;