// export class Drinks{
//   async getDrinkByRecipe(drink) {
//     try {
//       let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}&appid=[[API-KEY-GOES-HERE]]`);
//       let jsonifiedResponse = await response.json();
//       return jsonifiedResponse;
//     } catch(error) {
//     }
//   }
// }

export class Resturaunt{
  async getResturauntByLocation(city, state) {
    try {
      let pubResponse = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}`);
      let jsonifiedPubResponse = await pubResponse.json();
      return jsonifiedPubResponse;
    } catch(error) {

    }
  }
}
