import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

// import { BikeIndex } from './../src/bikes-service.js';

$(document).ready(function() {
  $('#bikeColor').click(function() {
    // let bikeSearch = new BikeIndex();
    const color = $('#color').val();
    $('#color').val("");

    fetch(`https://bikeindex.org:433/api/v3/search?page=1&colors=${color}&location=IP&distance=10&stolenness=stolen&access_token=${process.env.API_KEY}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(jasonifiedResponse) {
        getElements(jasonifiedResponse);
      });

    const getElements = function(response) {
        $('.showManName').text(`Manufacturer: ${response.bikes.manufacturer_name}.`);
        $('.showDateStolen').text(`This bike was stolen on ${response.bikes.date_stolen}.`);
      } 

  });
});

// fetch(`https://bikeindex.org:433/api/v3/search?page=1&colors=${color}&location=IP&distance=10&stolenness=stolen&access_token=${process.env.API_KEY}`)
// .then(function(response) {
//   return response.json();
// })
// .then(function(jasonifiedResponse) {
//   getElements(jasonifiedResponse);
// } catch(error) {
//   console.error("There was an error handling your request: " + error.message); 
// });