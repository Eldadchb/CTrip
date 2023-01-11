import GOOGLE_MAPS_API_KEY from "../google-maps-api-key";
const axios = require('axios')

exports.getResturantsFromGoogleApi = async (category, neighborhood, borough, city) => {

    try {
        const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${GOOGLE_MAPS_API_KEY}`)
        return JSON.stringify(data)
        
    } catch (error) {
        console.log('ERROR: ', error);
    }



};

exports.getAttractionsFromGoogleApi = async () => {

};