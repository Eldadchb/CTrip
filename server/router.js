const { getPlaces } = require('./controllers/places')
const router = require('express').Router();

router.post('/places', getPlaces);

module.exports = router;