const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

mongoose.connect('mongodb+srv://sebastienbesson:sebastien@cluster0.7oo1s.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !')); 

const app = express();

app.use(cors());


app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/sauces', sauceRoutes);


module.exports = app;