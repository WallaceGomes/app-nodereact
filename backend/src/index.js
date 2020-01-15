const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://nodereact:nodereact@cluster0-2s2v2.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true,
    useCreateIndex:true
});

app.use(express.json()); //habilita o uso do json nos métodos HTTP

app.use(routes);

app.listen(3333); //acessar servidor local
