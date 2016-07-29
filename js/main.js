$( document ).ready(function() {
  console.log('testing');
  $('.initial').on('click',function(e){
  	$('.activePill').removeClass('activePill');
  });

  $('#menu1, #menu2, #menu3, #menu4').on('click',function(e){
  	$('.activePill').removeClass('activePill');
  	$(this).addClass('activePill');
  });
});

