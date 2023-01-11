import { getResturants } from './controllers/places.js'
export default router = require('express').Router();

router.get('/resturants', getResturants);
// router.get('/attractions', getAttractions);