const { getPlaces } = require('./controllers/places')
const { getRoute } = require('./controllers/route')
const router = require('express').Router();

router.post('/places', getPlaces);
router.get('/route', getRoute);


module.exports = router;