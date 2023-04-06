'use strict';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config.js';
import eventRoutes from './routes/event.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/event', eventRoutes.routes);

app.listen(config.port, () => 
    console.log('LISTENTING PORT...')
);