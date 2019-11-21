export class Drinks{
  async getDrinkByRecipe(drink) {
    try {
      let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}&appid=[[API-KEY-GOES-HERE]]`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
    // inputError();


    }
  }

//???????????response.error

//     });
//   }
// }

// const getElements = function(response) {
//
//   var arr = []
//   response.drinks.forEach(function(drink) {
//     console.log(drink)
//     for(var i = 1; i > 15; i++) {
//       console.log(i)
//       if(drink.strIngredient + `${i}`!= null){
//         arr.push(drink.strIngredient + `${i}`)
//       }
//     }
//   }
// }
}
