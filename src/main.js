import {  Resturaunt } from './drinks.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';




$(document).ready(function() {
  // $('#button').click(function(event) {
    //   event.preventDefault;
    //   const drink = $('#placeDrinksHere').val();
    //   $('#placeDrinksHere').val("");
    //   (async () => {
      //     let newDrinks = new Drinks();
      //     const response = await newDrinks.getDrinkByRecipe(drink);
      //     getElements(response);
      //   })();
      //   if(this.value !=true){
        //     $("#showRecipe").text("oooops!");
        //   }
        //
        //   function getElements(response) {
          //     $('#showRecipe').text(`Ingredients needed for the perfect ${drink}: ${response.drinks[0].strIngredient1} and ${response.drinks[0].strIngredient2}`);
          //   }
          // })
          $('#button2').click(function(event) {

            event.preventDefault;
            const city = $('#city').val();
            const state = $('#state').val();
            $('#city').val('');
            $('#state').val('');
            (async () => {
              let pubs = new Resturaunt();
              const pubResponse = await pubs.getResturauntByLocation(city, state);
              getPath(pubResponse);
            })();
            function getPath(pubResponse) {
              let arra = [];
                // let pubList = "<ul>";
              for(var i=0; i < pubResponse.length; i++){
                arra.push(pubResponse[i].name);
              }
              let pubList = "<ul>";
                for(var j = 0; j < arra.length; j++){
                  pubList += "<li>" + arra[j] + "</li>";
                  pubList += "</ul>";
                }


              $('#displayLocation').text(`Here's a place to have a drink in ${city}, ${state}:`);
              $("#pubGroup").append(pubList);
console.log(pubList);

              // console.log(pubResponse);
            }
          });
          });
            // ${pubResponse.slice(0,2)[0].name}`);
