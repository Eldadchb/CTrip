const axios = require('axios');
const auth = require("../google-maps-api-key");

exports.getResturantsFromGoogleApi = async (category, neighborhood, borough, city) => {

    try {
        const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${auth.GOOGLE_MAPS_API_KEY}`)
        return data
        
    } catch (error) {
        console.log('ERROR: ', error);
    }

};

exports.getAttractionsFromGoogleApi = async () => {

};