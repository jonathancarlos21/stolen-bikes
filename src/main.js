import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import { BikeIndex } from './../src/bikes-service.js';

$(document).ready(function() {
  $('#bikeLocation').click(function() {
    const location = $('#location').val();
    $('#location').val("");
    
    (async () => {
      let bikeSearch = new BikeIndex();
      const response = await bikeSearch.findBikeByLocation(location);
      getElements(response);
      
    })();
    
    async function getElements(response) {
      const bikeArray = response;
      let bikeNameArray = [];
      let bikeDescArray = [];
      let bikeFrameArray = [];
      console.log(bikeArray.bikes[0].manufacturer_name);
      
      bikeArray.bikes.forEach(function(bike) {
        bikeNameArray.push(bike.manufacturer_name);
        bikeDescArray.push(bike.description);
        bikeFrameArray.push(bike.frame_model);  
      }); 


      for (let i=0; i<=25; i++) {
        $('.showManName').append("<li>" + "Manufacturer: " + bikeNameArray[i] + "</li>");
        
      }
    }
  });
});
// $('.showDateStolen').text(`This bike was stolen on ${response.bikes[i].description}.`);
// $(response.bikes[i].frame_model)