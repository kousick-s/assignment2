$(document).ready(function () {
$('#subbutton').click(function(){
	var tvalue='{$("#first_name").value}'
	if(tvalue===""){
		$("#nametick").html='&#10008';
	}
	else{
		$("#nametick").html='&#10003';
	}
});
$(document).on("blur","input", function (e) {
	var tname=(this).name;
	
    var tvalue=$('#' + tname).val();
   
	var dname='#'+tname+"tick";
	
   	var pname=tname+"p";
   
   
	if(tvalue===""){

		$('#' + pname).remove();
		$(dname).prepend("<p id="+pname+">&#10008</p>")
		//$('#content-area').prepend("<p class='info'>Information...</p>");
	}
	else{
		$( '#'+pname ).remove();
		$(dname).prepend("<p id="+pname+">&#10003</p>")
	}
});


$(document).on("click","#fromdate", function (e) {

var today = new Date().toISOString().split('T')[0];

(this).setAttribute('min',today)

//document.getElementsByName("somedate")[0].setAttribute('min', today);
});
$(document).on("click","#todate", function (e) {

var today = new Date();
var tomorrow = $("#fromdate").va(); //new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var tomday = tomorrow.getDate();
var tommonth = tomorrow.getMonth() + 1;
var tomyear = tomorrow.getFullYear();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;
if(tomday<10){tomday='0'+tomday} if(tommonth<10){tommonth='0'+tommonth} tomorrow = tomyear+"-"+tommonth+"-"+tomday;
alert(tomorrow);
(this).setAttribute('min',tomorrow)

//document.getElementsByName("somedate")[0].setAttribute('min', today);
});
$(document).on("blur ","#first_name", function (e) {

$(this).val( $(this).val().replace(/[^a-z]/g,'') );
//document.getElementsByName("somedate")[0].setAttribute('min', today);
});
$(document).on("blur ","#email", function (e) {
var ttname=(this).name;
	
    var ttvalue=$('#' + ttname).val();
   
    if(validateEmail(ttvalue)){}

    else{
    	
    	$(this).val('');
    }



//document.getElementsByName("somedate")[0].setAttribute('min', today);
});

$(function() {
    $( "#fromdate" ).datepicker();
});
function validateEmail(email) {

 var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
 if (reg.test(email)){
 return true; 
}
 else{
 	
 return false;

 } 
} 


});