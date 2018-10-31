
//animacion  titulo  Match Game/////////////////////////////////////////////////
var match_game = {
  cambioColor: function(){
    setInterval(function(){
      $(".main-titulo").animate({color: "#DCFF0E"}, 500),
      $(".main-titulo").animate({color: "#FFFFFF"}, 500)
    }, 100);
  },
}

$(function(){ //Callback
  match_game.cambioColor();
});
////////////////////////////////////////////////////////////////////////////////
