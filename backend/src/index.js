const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();

//apesar do método http ser usado pelo express, para usar o socket.io é preciso de um
//servodr http fora do express
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://nodereact:nodereact@cluster0-2s2v2.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true,
    useCreateIndex:true
});

app.use(cors());

app.use(express.json()); //habilita o uso do json nos métodos HTTP

app.use(routes);

server.listen(3333); //acessar servidor local
