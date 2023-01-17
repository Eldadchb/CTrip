const axios = require('axios');
const auth = require("../google-maps-api-key");

exports.getPlacesFromGoogleApi = async (location, radius, type) => {
    try {
        const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}&location=${location}&radius=${radius}&opennow=true&key=${auth.GOOGLE_MAPS_API_KEY}`);
        return data;
    } catch (error) {
        console.log('ERROR: ', error);
    }
};

exports.getResturantsFromGoogleApi = async (location, radius, type, keyword) => {
    try {
        const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}+${keyword}&location=${location}&radius=${radius}&opennow=true&key=${auth.GOOGLE_MAPS_API_KEY}`);
        return data;
    } catch (error) {
        console.log('ERROR: ', error);
    }
};

exports.getRouteFromGoogleApi = async (origin, destination, waypoints, mode) => {
    try {
        const { data } = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${mode}&waypoints=optimize:true|${waypoints}&key=${auth.GOOGLE_MAPS_API_KEY}`)
        return data;
    } catch (error) {
        console.log('ERROR: ', error);
    }
};
