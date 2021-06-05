import express from 'express';
import { info } from './config/logging';
import config from './config/config';
import mongoose from 'mongoose'

const NAMESPACE = 'Server';
const app = express();


// connection to mongoDB
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        info(NAMESPACE, 'Mongo Connected');
    })
    .catch((error) => {
        error(NAMESPACE, error.message, error);
    });

// Log the request 
app.use((req, res, next) => {
    // Log the req
    info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        // Log the res
        info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })   
    next();
});

/** Parse the body of the request */


/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

// Routes go here 

// Error handling 
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});


app.listen(config.server.port , () => {
    info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`)
})
