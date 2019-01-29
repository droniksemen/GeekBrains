function White(){
	  $(".button").css({"background-color":"black","color":"white"});
	}
	
	$('#one').click(function(){
	  $(".textItem").html(textItem1);
	  White();
	  $("#one").css({"background-color":"white", "color":"black"});
	});
	
	$('#two').click(function(){
	  $(".textItem").html(textItem2);
	   White();
	  $("#two").css({"background-color":"white", "color":"black"});
	});
	
	$('#three').click(function(){
	  $(".textItem").html(textItem3);
	   White();
	  $("#three").css({"background-color":"white", "color":"black"});
	});
	
	$('#four').click(function(){
	  $(".textItem").html(textItem4);
	   White();
	  $("#four").css({"background-color":"white", "color":"black"});
	});