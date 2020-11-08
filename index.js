//const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

//fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!" , error);
//    return;
//  }
//  ip = "curl 'https://api.ipify.org?format=json'";
//  console.log('It worked! Returned IP:' , ip);
//});

fetchCoordsByIP('24.71.170.13', (error, data) => {
  if (error) {
       console.log("It didn't work!" , error);
          return;
   }
     console.log('It worked! Returned IP:' , data);
  });