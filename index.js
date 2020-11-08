const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  ip = "curl 'https://api.ipify.org?format=json'";
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('24.71.170.13', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , coordinates);
  });

fetchISSFlyOverTimes((error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Return Fly Over Times:', flyOverTimes);
});

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
});