const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/06f7ae2b8c492f63f6455d7eb1bcb2b4/' + latitude + ',' + longitude + '?' + 'units=si';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Connection to weather failed', undefined);
        } else if (body.error) {
            callback('Location was not found', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' The tempature right now is ' + body.currently.temperature + ' degress. And it will be between ' + body.daily.data[0].temperatureHigh + ' to ' + body.daily.data[0].temperatureLow + ', with ' + body.currently.precipProbability + '% chance of rain.');
        }
    })
}

module.exports = forecast;