const { getPlaces } = require('./controllers/places')
const router = require('express').Router();

router.get('/places', getPlaces);

module.exports = router;