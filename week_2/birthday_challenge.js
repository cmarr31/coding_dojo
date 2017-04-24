var daysUntilMyBirthday = 4;

function whileYouWait(days){
	while(days >= 1){
	
		if(days > 30){
			console.log(":[");
		}
		else if(days < 5){
			console.log(days, "LEFT UNTIL MY BIRTHDAY!!!!!");
		}
		days -=1
	}
	console.log("IT'S FINALLY HERE!!!!");
}

whileYouWait(daysUntilMyBirthday);