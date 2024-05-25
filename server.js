const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors()); 
app.use(express.json());

const uri = 'mongodb+srv://hanidila206:hanidila206Test@cluster0.zlgvmyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connect = async () => {
    try{
      await mongoose.connect(uri);
      console.log('connect to MongoDB');
    }
    catch(e){
        console.log('error connecting to MongoDB', e);
    }
};

connect();

const server = app.listen(port,host, () => {
console.log('Node server is listening to',server.address().port);
});
app.use('/api',router)