const { getResturantsFromGoogleApi } = require('../services/google-maps-api.js');

exports.getResturants = async (req, res) => {
    try {
        const usersReq = {
            category: req.body.category,
            neighborhood: req.body.neighborhood,
            borough: req.body.borough,
            city: req.body.city
        }
        const dataReq = await getResturantsFromGoogleApi(usersReq.category, usersReq.neighborhood, usersReq.borough, usersReq.city);
        res.send(dataReq);

    } catch (error) {
        console.log('ERROR: ', error);
        res.sendStatus(500);
    }
}

// exports.getAttractions = async (req, res) => {
//     try {
        
//     } catch (error) {
//         console.log('ERROR: ', error);
//         res.sendStatus(500);
//     }
// }