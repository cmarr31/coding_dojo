function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomChance(num_quarters){
	while (num_quarters > 0) {
		var winning_number = getRandomInt(1, 100);
		var number_guessed = getRandomInt(1, 100);
		if (winning_number == number_guessed) {
			num_quarters--;
			return num_quarters + getRandomInt(50, 100);
		}
		else {
			num_quarters--;
			console.log(num_quarters);
		}
	}	
}

randomChance(31);