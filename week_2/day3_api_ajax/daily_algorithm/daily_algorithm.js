function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function whatHappensToday(){
	var num = getRandomIntInclusive(1, 36);
	if (num < 11) {
		return "volcano";
	}
	else if (num > 10 && num < 16) {
		return "tsunami";
	}
	else if (num > 15 && num < 21) {
		return "earthquake";	
	}
	else if (num > 25 && num < 31) {
		return "blizzard";
	}
	else if (num > 30 && num < 36) {
		return "meteors";
	}
}

function whatReallyHappensToday(){
  for(var i = 0; i <= 5; i++){
    console.log(whatHappensToday());
  }
}

whatReallyHappensToday();