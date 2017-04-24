function aFewBillion(){
	var reward = 0.01;
	var incriments = 0.01;
	var check_array = [];
	for (var i = 0; i <= 30; i++) {
		check_array.push(reward);
		reward += incriments;
		incriments *= 2;
	}
	console.log(reward);
	console.log(check_array);
}

aFewBillion();