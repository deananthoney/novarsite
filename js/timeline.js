// JavaScript Document

var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;

$(document).ready(function(){
	$("div, img", ".btnReplay").hide();
						   
						   
	//on page load
	timelineAnimation();		
	
	//
	$("div, img", ".btnReplay").bind("click", replay);
		
});//ready

//
function replay(){
	  clearTimeout(t2);									   
	  clearTimeout(t3);									   
	  clearTimeout(t4);									   
	  clearTimeout(t5);									   
	  clearTimeout(t6);									   
	  clearTimeout(t7);		
	  clearTimeout(t8);		
	  clearTimeout(t9);	
	  $("#vLine1, #vLine2, #vLine3, #vLine4, #vLine5, #vLine6, #vLine7").css("height", 1);
	  $("#hLine").css("width", 1);
	  
	  $("img, div", ".timelineDiv").each(function(){
		  $(this).hide(500);											
	  });										   
	  t9 = setTimeout(function(){
		  timelineAnimation();								 
	  }, 600);		
}



//
function timelineAnimation(){ 

	$("div, img", ".btnReplay").fadeOut(1000);
	
	//1
	$("#year1954, #circle1").fadeIn(1000, function(){
		$("#vLine1").show().animate({height: "70"},500, function(){
			$("#copy1").fadeIn(500);														  
		});
	});	
	
	//2
	t2 = setTimeout(function(){
		$("#hLine").show().animate({width: "59"},500, function(){
				$("#year1959, #circle2").fadeIn(1000, function(){
					$("#vLine2").show().animate({height: "165"},500, function(){
						$("#copy2").fadeIn(500);														  
					});
				});	
		});				
	}, 2500);
	
	//3
	t3 = setTimeout(function(){
		$("#hLine").show().animate({width: "222"},500, function(){
				$("#year1973, #circle3").fadeIn(1000, function(){
					$("#vLine3").show().animate({height: "68"},500, function(){
						$("#copy3").fadeIn(500);														  
					});
				});	
		});				
	}, 5000);
	
	//4
	t4 = setTimeout(function(){
		$("#hLine").show().animate({width: "417"},500, function(){
				$("#year1989, #circle4").fadeIn(1000, function(){
					$("#vLine4").show().animate({height: "70"},500, function(){
						$("#copy4").fadeIn(500);														  
					});
				});	
		});				
	}, 7500);
	
	//5
	t5 = setTimeout(function(){
		$("#hLine").show().animate({width: "580"},500, function(){
				$("#year2004, #circle5").fadeIn(1000, function(){
					$("#vLine5").show().animate({height: "126"},500, function(){
						$("#copy5").fadeIn(500);														  
					});
				});	
		});				
	}, 10000);
	
	//6
	t6 = setTimeout(function(){
		$("#hLine").show().animate({width: "662"},500, function(){
				$("#year2010, #circle6").fadeIn(1000, function(){
					$("#vLine6").show().animate({height: "70"},500, function(){
						$("#copy6").fadeIn(500);														  
					});
				});	
		});				
	}, 12500);
	
	//7
	t7 = setTimeout(function(){
		$("#hLine").show().animate({width: "698"},500, function(){
				$("#year2011, #circle7").fadeIn(1000, function(){
					$("#vLine7").show().animate({height: "162"},500, function(){
						$("#copy7").fadeIn(500, function(){$("div, img", ".btnReplay").fadeIn(500);});														  
					});
				});	
		});				
	}, 15000);
	
	
	
	
}
