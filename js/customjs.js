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

});
$(document).on("click","#fromdate", function (e) {

var today = new Date().toISOString().split('T')[0];
(this).setAttribute('min',today)

//document.getElementsByName("somedate")[0].setAttribute('min', today);
});
$(document).on("click","#todate", function (e) {
	alert('comin');
var yest=new Date.addDays(1).toISOString();
alert(yest);
var tomorrow = new Date().addDays(2).toISOString().split('T')[0];


(this).setAttribute('min',tomorrow)

//document.getElementsByName("somedate")[0].setAttribute('min', today);
});
$(document).on("blur ","#first_name", function (e) {

$(this).val( $(this).val().replace(/[^a-z]/g,'') );
//document.getElementsByName("somedate")[0].setAttribute('min', today);
});


