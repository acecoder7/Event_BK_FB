import express from 'express';
import { addEvent, getAllEvent, getEvent, updateEvent, deleteEvent } from '../controllers/event.js';

const router = express.Router();

router.post('/add', addEvent);

router.get('/all', getAllEvent);

router.get('/:id', getEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);


export default {
    routes: router
}