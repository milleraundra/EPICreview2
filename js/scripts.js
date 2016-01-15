$(function() {

  $('#survey').submit(function(event) {
 debugger;
    var temperature = $('#temperature').val();
    var necessities = $('#necessities').val();
    var clothes = $('#clothes').val();
    var time = $('#time').val();
    var supplies = $('#supplies').val();

    //People who like cold weather
    if (temperature !== 'hate' && time !== 'eat' || temperature !== 'hate' && time !== 'sleep'){
      //People who like to hike and discover
      if (time === 'hike', 'eat', 'sleep' && temperature !== 'love') {
        $('#resultExplore').show();
        $('#resultSnow, #resultHate').hide();
      }
      //People who like to do sports and activities
      else {
        $('#resultSnow').show();
        $('#resultExplore, #resultHate').hide();
      }
    }
    //People who hate cold weather
    else {
      $('#resultHate').show();
      $('#resultSnow, #resultExplore').hide();
    };

event.preventDefault();
  });


});

//Attempt 2:
// if (necessities === 'no') {
//   $('#resultSnow').show();
//   $('#resultHate, #resultExplore').hide();
// }
// else {
//   $('#resultSnow').show();
//   $('#resultHate, #resultExplore').hide();
// }







// Attempt 1:
//   if (necessities = 'no' && supplies = 'no'){
//     ('#resultExplore')
//   }
//
//   if else (necessities = 'no' && supplies = 'yes') {
//     ('#resultSnow')
//   }
