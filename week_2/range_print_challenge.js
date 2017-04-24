function printRange(start, end, skip_amount){
	for (var i = start; i < end; i += skip_amount) {
		console.log(i);
	}
}

printRange(2, 10, 2);