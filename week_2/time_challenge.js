var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

function time(){
	if(MINUTE < 30){
		console.log("It's just after" + HOUR + " in the morning.")
	}
	else{
		console.log("It's almost " + (HOUR+1) + " in the morning.")
	}
}

time()