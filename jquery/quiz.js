var choose = false;
var isSelected = false;
var question_index = 0;
var output = "";
var question_finish =0;
var correct_count = 0;
var question_arr = ["There are total 30 NBA teams in the League.",
"Golden state Worriors is the champion this year.",
"Denver has its own NBA team.",
"Jordan is still playing basketball in the League."];
  //setup

$(document).ready(function(){
  $("#choice3").hide();
  $("#choice4").hide();
  $("#label3").hide();
  $("#label4").hide();

  // Hovering
$("#q1").hover(
 function(){  
  if(!(question_arr.indexOf($("#question_prompt_hint").text()) > -1)){
    $("#question_prompt_hint").html("Click to see the question");	
  }
  if($("#q1").css("background-color") != "rgb(0, 128, 0)"){
  	$(this).css("background-color", "pink");
  }
},
 function(){
  if(($("#q1").css("background-color") != "rgb(0, 128, 0)" && !choose)||question_index != 1){
    $(this).css("background-color", "white");
  }
    
  if($("#question_prompt_hint").text() == "Click to see the question" && !choose){
    $("#question_prompt_hint").html("");  
  }
});

$("#q2").hover(function(){
  if(!(question_arr.indexOf($("#question_prompt_hint").text()) > -1)){
	$("#question_prompt_hint").html("Click to see the question");	
  }
  if($("#q2").css("background-color") != "rgb(0, 128, 0)"){
  	$(this).css("background-color", "pink");
  }
  		  	
},
  function(){
   if(($("#q2").css("background-color") != "rgb(0, 128, 0)" && !choose)||question_index != 2){
    $(this).css("background-color", "white");
    }

   if($("#question_prompt_hint").text() == "Click to see the question" && !choose){
    $("#question_prompt_hint").html("");  
  }
});  

$("#q3").hover(function(){
  if(!(question_arr.indexOf($("#question_prompt_hint").text()) > -1)){
    $("#question_prompt_hint").html("Click to see the question");	
  }
  if($("#q3").css("background-color") != "rgb(0, 128, 0)"){
  	$(this).css("background-color", "pink");
  }	
},
  function(){
    if(($("#q3").css("background-color") != "rgb(0, 128, 0)" && !choose )||question_index != 3){
      $(this).css("background-color", "white");
  }

  	if($("#question_prompt_hint").text() == "Click to see the question" && !choose){
      $("#question_prompt_hint").html("");  
  }
});  

$("#q4").hover(function(){
  if(!(question_arr.indexOf($("#question_prompt_hint").text()) > -1)){
	$("#question_prompt_hint").html("Click to see the question");	
  }
  if($("#q4").css("background-color") != "rgb(0, 128, 0)"){
  	$(this).css("background-color", "pink");
  }		 	
},
  function(){
    if(($("#q4").css("background-color") != "rgb(0, 128, 0)" && !choose )||question_index != 4){
      $(this).css("background-color", "white");
  }

  	if($("#question_prompt_hint").text() == "Click to see the question" && !choose){
      $("#question_prompt_hint").html("");  
  }  	
 });  


  //Picking a Question
    /*
	1. There are total 30 NBA teams in the League.
	2. Golden state Worriors is the champion this year.
	3. Denver has its own NBA team.
	4. Jordan is still playing basketball in the League.
  */

  $("#q1").click(function(){
  	if(!choose){
  	  $("#question_prompt_hint").text("There are total 30 NBA teams in the League.");
  	  $("#q1").css("background-color", "green");
  	  choose = true;
  	  question_index = 1;	
  	}
  	if(!isSelected && choose && !(question_index == 1)){
  	  alert("Must answer current question");
  	}
  });

  $("#q2").click(function(){
  	if(!choose){
      $("#question_prompt_hint").text("Golden state Worriors is the champion this year.");
  	  $("#q2").css("background-color", "green");
  	  updateMultipleChoice();
  	  choose = true;
  	  question_index = 2; 		
  	}

  	if(!isSelected && choose && !(question_index == 2)){
  	  alert("Must answer current question");
  	}

  });

  $("#q3").click(function(){
  	if(!choose){
  	  $("#question_prompt_hint").text("Denver has its own NBA team.");
  	  $("#q3").css("background-color", "green");
  	  choose = true;
  	  question_index = 3;	
  	}

  	if(!isSelected && choose && !(question_index == 3)){
  	  alert("Must answer current question");
  	}
      
  });

  $("#q4").click(function(){
  	if(!choose){
      $("#question_prompt_hint").text("Jordan is still playing basketball in the League.");
  	  $("#q4").css("background-color", "green");
  	  choose = true;
  	  question_index = 4;  		
  	}

  	if(!isSelected && choose && !(question_index == 4)){
  	  alert("Must answer current question");
  	}

  });

  //check answer button,    

  $("#check_ans_btn").click(function(){
  	if($('#choice1').prop('checked') != false || $('#choice2').prop('checked') != false ||
  	$('#choice3').prop('checked') != false || $('#choice4').prop('checked') != false){
  		isSelected = true;
  	}
 	if(!isSelected){
 		alert("Must select true/false");
 	} else{
 		//Answering the Question
 		if(question_index == 1){
 			output = $('#q1').text();
 			console.log("q1");
 			if($('#choice1').prop('checked')){
 				alert("Correct answer!!!");
 				output += " :)";
 				correct_count++;
 			} else{
 				alert("Wrong answer!!!");
 				output += " :(";
 			}
 			 
 			$('#question_list1').text(output);
 			$('#q1').remove();

  		} else if(question_index == 2){
 			console.log("q2");
 			output = $('#q2').text();
 			if($('#choice2').prop('checked')){
 				alert("Correct answer!!!");
 				output += " :)";
 				correct_count++;
 			} else{
 				alert("Wrong answer!!!");
 				output += " :(";
 			}
 			$("#choice3").hide();
  			$("#choice4").hide();
            $("#label3").hide();
            $("#label4").hide();
            $("#label1").text("true");
            $("#label2").text("false");
 			$('#question_list2').text(output);
  			$('#q2').remove();
			
 		} else if(question_index == 3){
 			console.log("q3");
 			output= $('#q3').text();
 			if(!$('#choice2').prop('checked')){
  				alert("Correct answer!!!");
 				output += " :)";
 				correct_count++;
 			} else{
 				alert("Wrong answer!!!");
 				output += " :(";
 			}
 			 
 			$('#question_list3').text(output);
 			$('#q3').remove();

 		} else if(question_index == 4){
 			console.log("q4");
 			output = $('#q4').text();
 			if(!$('#choice1').prop('checked')){
  				alert("Correct answer!!!");
 				output += " :)";
 				correct_count++;
 			} else{
 				alert("Wrong answer!!!");
 				output += " :(";
 			}
 			$('#question_list4').text(output);
 			$('#q4').remove();

 		}
 		resetVars();
 		if(question_finish == 4){
 			console.log("finish answering the questions");
		 
		 $("#end_section").css('width','90%');
		 $("#end_section").css('height','600px');
		 $("#end_section").css('background-color','blue');
		 $("#end_words").text('Congrats! You completed the quiz. Your score is '+ correct_count/0.04 +'%!');
		 $("#end_words").css('color','white');
		 $("#end_words").css('fontSize','2vw');
		 $("#end_section").dblclick(function(){
  			 $("#end_section").fadeOut(2000);
		  });
 		}
 	}
   });
  //end of this game



	  
});

function resetVars(){
  console.log("reset btns");
  
  document.getElementById("choice1").checked = false;
  document.getElementById("choice2").checked = false;
  choose = false;
  isSelected = false;
  question_index = 0;
  question_finish++;
  $("#question_prompt_hint").text("");
  $("#score").text("Scores: "+correct_count +"/4("+correct_count/4+"%)"); 	
}
  

function updateMultipleChoice(){
  $("#choice3").show();
  $("#choice4").show();
  $("#label3").show();
  $("#label4").show();

  //change the option.
  $("#label1").text("Golden State Worriors");
  $("#label2").text("Toronto Raptors");
  $("#label3").text("Phoneix Suns");
  $("#label4").text("L.A Lakers");

   
}