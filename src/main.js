import { Drinks } from './drinks.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#button').click(function(event) {
    event.preventDefault;
    const drink = $('#placeDrinksHere').val();
    $('#placeDrinksHere').val("");
    (async () => {
  let newDrinks = new Drinks();
  const response = await newDrinks.getDrinkByRecipe(drink);
  getElements(response);
})();
// if(drink ==  0){
//   $("#showRecipe").text("oooops!");
// }
//
// function inputError() {
//   $('#showRecipe').text(`There was an error processing your request: `);
// }

// ${error.message}

    function getElements(response) {
      $('#showRecipe').text(`Ingredients needed for the perfect ${drink}: ${response.drinks[0].strIngredient1} and ${response.drinks[0].strIngredient2}`);



    }
  });
});
