const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=9fb8077188fe35f8e57c10e4e0e4bd76&query=' + latitude + ',' + longitude + '&units=m';

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather services.', undefined);
    } else if (body.error) {
      callback('Unable to find forecast. Try another location', undefined);
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees outside. It feels like ${body.current.feelslike}.`);
    }
  })
}

module.exports = forecast;