export class BikeIndex {
  async findBikes(year, stolen_location) {
    try {
      let response = await fetch(`https://bikeindex.org/api/v3/search?page=1&year=${year}&location=${stolen_location}&distance=10&stolenness=stolen&access_token=${process.env.API_KEY}`);
      let jasonifiedResponse = await response.json();
      return jasonifiedResponse;
      } catch(error) {
        console.error("There was an error handling your request: " + error.message); 
      } 
    }




  }
