import express from 'express';
const app = express();
const port = 5000;
import mongoose from 'mongoose';
const mongoDb = 'mongodb://localhost:27017/db_contact';
import bodyParser from 'body-parser';
import Router from './src/routes/router.js';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.set("strictQuery", false);
mongoose.connect(mongoDb, {
    useNewUrlParser: true
})

app.use(Router);

app.listen(port, () => {
    console.log('Rest api listening at https://localhost:' + port);
})