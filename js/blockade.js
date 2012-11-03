$(document).ready(function() {
  // Handler for .ready() called.
	setTimeout("blockade1()",2000);
});

function blockade1() {
	$('#blockade_sprite1_jpg').fadeIn( 'slow', function() {
		setTimeout("blockade2()",2000);	}
	 )
}

function blockade2() {
	$('#blockade1').css( 'color','#923222' );
	$('#blockade_sprite0_jpg').fadeIn( 'slow', function() {
		setTimeout("blockade3()",2000);	}
	 )
}

function blockade3() {
	$('#blockade1').css( 'color','black' );
	$('#blockade2').css( 'color','#923222' );
	$('#blockade_sprite4_jpg').fadeIn( 'slow', function() {
		setTimeout("blockade4()",2000);	}
	 )
}

function blockade4() {
	$('#blockade2').css( 'color','black' );
	$('#blockade3').css( 'color','#923222' );
	$('#blockade_sprite3_jpg').fadeIn( 'slow', function() {
		setTimeout("blockade5()",2000);	}
	 )
}


function blockade5() {
	$('#blockade3').css( 'color','black' );
	$('#blockade4').css( 'color','#923222' );
	$('#blockade_sprite2_jpg').fadeIn( 'slow', function() {
		setTimeout("blockade6()",2000);	}
	 )
}

function blockade6() {
	$('#blockade4').css( 'color','black' );
	$('#blockade_sprite2_jpg').fadeIn( 'slow')
}




