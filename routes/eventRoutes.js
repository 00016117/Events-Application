const express = require('express');
const router = express.Router();

// Import eventController
const eventController = require('../controllers/eventController');

// Route for creating an event
router.post('/', eventController.createEvent);

// Route for reading all events
router.get('/', eventController.getAllEvents);

// Route for reading a single event
router.get('/:eventId', eventController.getEventById);

// Route for updating an event
router.put('/:eventId', eventController.updateEvent);

// Route for deleting an event
router.delete('/:eventId', eventController.deleteEvent);

module.exports = router;