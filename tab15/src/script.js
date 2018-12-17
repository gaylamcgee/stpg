$(document).ready(function(){
	$("#buttan").click(function(){
            $('#box').fadeIn('500');
			$('#cover').fadeTo("500",0.9);
    });
    $("#buttantwo").click(function(){
            $('#boxtwo').fadeIn('500');
			$('#cover').fadeTo("500",0.9);
    });
    $("#buttanthree").click(function(){
            $('#boxthree').fadeIn('500');
            $('#cover').fadeTo("500",0.9);
    });
    $("#buttanfour").click(function(){
            $('#boxfour').fadeIn('500');
            $('#cover').fadeTo("500",0.9);
    });
    $("body").keydown(function(key){
         if ( key.which == 27 ) {
            $('#cover, #box, #boxtwo, #boxthree, #boxfour, #sekrit').fadeOut('500');
        }
    });
    $("body").keydown(function(key){
         if ( key.which == 104 ) {
            $('#sekrit').fadeIn('500');
            $('#cover').fadeTo("500",0.9);
        }
    });
    $("#cover").click(function(){
            $('#cover, #box, #boxtwo, #boxthree, #boxfour, #sekrit').fadeOut('500');
    });
    $("body").keydown(function(key){
         if ( key.which == 103 ) {
            window.location='http://google.com'
        }
    });
    $("body").keydown(function(key){
         if ( key.which == 102 ) {
            window.location='http://youtube.com'
        }
    });
    $("body").keydown(function(key){
         if ( key.which == 101 ) {
            window.location='http://store.steampowered.com'
        }
    });
});