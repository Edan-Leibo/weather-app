const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZWRhbiIsImEiOiJjanZkbHY4a3QwZWd2NGRvNmF3cmtvajkwIn0.Z5Dq656M8djolcQZL2dexQ&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Connection to weather failed', undefined)
        } else if (body.features.length === 0) {
            callback('Location was not found.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode