const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const eventsRoutes = require('./routes/events');

const app = express();
dotenv.config();

const {
  DB_HOST,
  DB_NAME,
  NODE_ENV
} = process.env;

const mongoURI = `mongodb://${DB_HOST}/${DB_NAME}`;
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', error => console.log(error));
mongoose.connection.once('open', () => console.log("Connected to mongo server."))


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/events', eventsRoutes);


if(NODE_ENV != 'development') {
  app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  })
}


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`))