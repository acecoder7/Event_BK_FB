'use strict';
import { Event } from '../models/event.js';

import firebase from 'firebase/compat/app';

import firestore from '../db.js';



//CREATE EVENT 
export const addEvent = async (req, res) => {
    try{
        const data = req.body;
        await firestore.collection('events').doc().set(data);
        res.send('Event Added');
    } catch (error) {
        res.status(400).send(error.message)
    }
}



//GET ALL EVENTS
export const getAllEvent = async (req, res) => {
    try {
        const events = await firestore.collection('events');
        const data = await events.get();
        const eventArray =[];
        if(data.empty) {
            res.send(404).send('No Event record found');
        } else {
            data.forEach(doc => {
                const event = new Event(
                    doc.id,
                    doc.data().title,
                    doc.data().desc,
                    doc.data().image_url,
                    doc.data().category,
                    doc.data().date,
                    doc.data().time,
                    doc.data().venue,
                    doc.data().mode
                );
                eventArray.push(event);
            });
            res.send(eventArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}



//GET SINGLE EVENT
export const getEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await firestore.collection('events').doc(id);
        const data = await event.get();
        if(!data.exists) {
            res.status(404).send('Event not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}



// UPDATE EVENT
export const updateEvent = async (req, res) => {
    try {
      const eventId = req.params.id;
      const data = req.body;
      await firestore.collection('events').doc(eventId).update(data);
      res.send('Event Updated');
    } catch (error) {
      res.status(400).send(error.message);
    }
}



// DELETE EVENT
export const deleteEvent = async (req, res) => {
    try {
      const eventId = req.params.id;
      await firestore.collection('events').doc(eventId).delete();
      res.send('Event Deleted');
    } catch (error) {
      res.status(400).send(error.message);
    }
}
