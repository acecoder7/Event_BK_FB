'use strict';
import express from 'express';
import cors from 'cors';
import config from './config.js';
import eventRoutes from './routes/event.js';

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/event', eventRoutes.routes);

app.listen(config.port, () => {
    console.log('LISTENTING PORT...')
}
);