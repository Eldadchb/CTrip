const { getPlacesFromGoogleApi } = require('../services/google-maps-api.js');

exports.getPlaces = async (req, res) => {
    try {
        const usersReq = {
            location: req.body.location,
            radius: req.body.radius,
            type: req.body.type
        }
        const dataReq = await getPlacesFromGoogleApi(usersReq.location, usersReq.radius, usersReq.type);
        res.send(dataReq);

    } catch (error) {
        console.log('ERROR: ', error);
        res.sendStatus(500);
    }
};