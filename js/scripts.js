$(function() {

  $('#survey').submit(function(event) {

    var temperature = $('#temperature').val();
    var necessities = $('#necessities').val();
    var clothes = $('#clothes').val();
    var time = $('#time').val();
    var supplies = $('#supplies').val();

    if (temperature !== 'hate' && time !== 'eat' || temperature !== 'hate' && time !== 'sleep'){

      if (time === 'hike') {
        $('#resultExplore').show();
        $('#resultSnow, #resultHate').hide();
      }

      else {

        if (necessities === 'no') {
          $('#RVsupplies').show();
          $('#resultSnow').show();
          $('#resultHate, #resultExplore').hide();
        }
        else {
          $('#resultSnow').show();
          $('#resultHate, #resultExplore').hide();
        }

      }
    }

    else {
      $('#resultHate').show();
      $('#resultSnow, #resultExplore').hide();
    };




event.preventDefault();
  });


});

//   if (necessities = 'no' && supplies = 'no'){
//     ('#resultExplore')
//   }
//
//   if else (necessities = 'no' && supplies = 'yes') {
//     ('#resultSnow')
//   }
