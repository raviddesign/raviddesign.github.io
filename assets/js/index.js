//Animation for header

var i =1;

function func(){
	var message="Responsive Web Design"
	if (i <= message.length){
		var txt = message.substring(0,i);
		document.getElementById("home-text").innerHTML = txt;
		setTimeout("func()",150)
		i++
	}
	else{
	}
}
func();

