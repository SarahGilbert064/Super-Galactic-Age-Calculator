import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Age from './../js/age.js';



$(document).ready(function() {
  $('form#button').click(function(event) {
    event.preventDefault();

    $(".planets").each(function() {
      let planet =$(this).find("#planets").val();
      let age = $(this).text("#user-age").val();
      return this.value;
    });

    let newAge = new Age(planet, age);

    $("#age-output").text(newAge.)
  });
});