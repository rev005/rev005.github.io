$( document ).ready(function() {
  console.log('testing');
  $('#menu1, #menu2, #menu3, #menu4').on('click',function(e){
  	$('.activePill').removeClass('activePill');
  	$(this).addClass('activePill');
  });
});

