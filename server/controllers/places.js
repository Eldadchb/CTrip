const { getPlacesFromGoogleApi, getResturantsFromGoogleApi, getRouteFromGoogleApi } = require('../services/google-maps-api.js');
const { createRoute } = require('../services/create-route.js')

exports.getPlaces = async (req, res) => {
    try {
        const usersReq = {
            location: req.body.location,
            radius: req.body.radius * 1000,
            type: [...req.body.type].join('+'),
            keyword: [...req.body.keyword].join('+'),
        }

        const resturantsData = await getResturantsFromGoogleApi(usersReq.location, usersReq.radius, 'resturant', usersReq.keyword);
        const placesData = await getPlacesFromGoogleApi(usersReq.location, usersReq.radius, usersReq.type);
        const routeData = createRoute(resturantsData, placesData, usersReq.location)
        const routeFromGoogle = await getRouteFromGoogleApi(routeData.origin, routeData.destination, routeData.waypoints.join('|'), routeData.travelMode)
        console.log(routeFromGoogle);
        res.send(routeFromGoogle);

    } catch (error) {
        console.log('ERROR: ', error);
        res.sendStatus(500);
    }
};
