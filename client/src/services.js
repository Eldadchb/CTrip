const URL = 'http://localhost:3001'
const test = {
    "location": "52.5284401,13.3721163",
    "radius": "800",
    "type": "restaurant",
    "keyword": "turkish"
}

export const fetchPlaces = async (usersData) => {
    try {
        const response = await fetch(URL + '/places', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(usersData)
        });
        return await response.json()

    } catch (error) {
        console.log(error);
    }
}

// export const userDataConv = (usersData) => {
//     const result = {};
//     result['location'] = usersData.location
//     result['radius'] = usersData.radius
//     result['type'] = [...usersData.type]
//     result['keyword'] = [...usersData.keyword]
//     return result

// }