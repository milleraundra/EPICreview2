$(function() {

  $('#survey').submit(function(event) {
    // debugger;
    var temperature = $('#temperature').val();
    var necessities = $('#necessities').val();
    var clothes = $('#clothes').val();
    var time = $('#time').val();
    var supplies = $('#supplies').val();

    if (temperature !== 'hate' && time !== 'eat' || temperature !== 'hate' && time !== 'sleep'){

      if (necessities === 'no' & supplies === 'no'){
        $('#resultExplore').show();
      } else {
        $('#resultSnow').show();
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
