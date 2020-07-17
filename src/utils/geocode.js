const request = require('request');

const geocode = (address, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=9fb8077188fe35f8e57c10e4e0e4bd76&query=' + address + '&units=m';

  request({url, json: true}, (error, {body}) => {
    if (error) {
      callback('Unable to connect to location services.', undefined);
    } else if (body.error) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        longitude: body.location.lon,
        latitude: body.location.lat,
        location: body.location.name
      });
    }
  })
};

module.exports = geocode;