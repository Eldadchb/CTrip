const URL = 'http://localhost:3001'

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
    };
};
