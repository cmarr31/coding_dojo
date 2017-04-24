function numbersOnly(arr){
	new_arr = []
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "number"){
			new_arr.push(arr[i]);
		}
	}
	console.log(new_arr);
}

numbersOnly(["apples", 1, "gatorade", 5, 7]);