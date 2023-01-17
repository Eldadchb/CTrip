const { getRouteFromGoogleApi } = require('../services/google-maps-api.js');

exports.getRoute = async (req, res) => {
    try {
        const usersReq = {
            origin: req.body.origin,
            destination: req.body.destination,
            mode: req.body.mode,
            waypoints: req.body.waypoints,
        }
        const wayPointsString = createWaypointsString(usersReq.waypoints)
        const dataReq = await getRouteFromGoogleApi(usersReq.origin, usersReq.destination, usersReq.mode, wayPointsString);
        res.send(dataReq);

    } catch (error) {
        console.log('ERROR: ', error);
        res.sendStatus(500);
    }
};

const createWaypointsString = (waypoints) => {
    let waypointsString = "";
    for (let i = 0; i < waypoints.length; i++) {
        waypointsString += `${waypoints[i].lat},${waypoints[i].lng}`;
        if (i !== waypoints.length - 1) {
            waypointsString += "|";
        }
    }
    return waypointsString;
};