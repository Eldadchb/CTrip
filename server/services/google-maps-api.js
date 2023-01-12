const axios = require('axios');
const auth = require("../google-maps-api-key");


exports.getPlacesFromGoogleApi = async (location, radius, type) => {

    try {
        const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&types=${type}&opennow=true&key=${auth.GOOGLE_MAPS_API_KEY}`)
        return data
        
    } catch (error) {
        console.log('ERROR: ', error);
    }
};
