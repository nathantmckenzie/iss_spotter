const request = require('request');


const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  })
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://geo.ipify.org/api/v1?apiKey=at_0HeYVeava9Sj81wMlMWdZRdIyjAxn&ipAddress=8.8.8.8`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coordinates from IP: ${body}`))
      return;
    }
    const ip = JSON.parse(body).ip;
    const latitude = data.latitude;
    const longitude = data.longitude;
    const coordinates = {latitude, longitude};
    callback(null, coordinates);
  })
};

module.exports = {fetchMyIP, fetchCoordsByIP};
