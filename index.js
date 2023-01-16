import express from 'express';
const app = express();
const port = 5000;
import bodyParser from 'body-parser';
import Router from './src/routes/router.js';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(Router);

app.listen(port, () => {
    console.log('Rest api listening at https://localhost:' + port);
})