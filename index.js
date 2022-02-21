require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleWare/not-found');
const errorHandlerMiddleware = require('./middleWare/error-handler');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.json());

app.use('/api/v1/',mainRouter);

app.get('/',(req,res)=>{
    res.json({name:'Hello Wordl'});
 })  

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


app.listen(port,()=>{
    console.log('server is started')
});

