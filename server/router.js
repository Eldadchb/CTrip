const { getResturants } = require('./controllers/places')
const router = require('express').Router();

router.get('/resturants', getResturants);
// router.get('/attractions', getAttractions);

module.exports = router;