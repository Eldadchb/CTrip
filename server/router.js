const router = require('express').Router();

const { getEvents, postEvent } = require('./controllers/event')

router.get('/events', getEvents);
router.post('/events', postEvent);

module.exports = router;
