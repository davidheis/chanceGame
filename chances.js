function guess(x){
	var limit = 10001
	var count = 0
	var random = Math.floor(Math.random() * limit)
	if (x === random) {
		return '1st go!!!'
	}
	if (x > limit - 1 || x < 0) {
		return 'number must be lower than ' + limit + ', and more than 0'
	} else {
		while(x !== random){
		console.log(random)
		random = Math.floor(Math.random() * limit)
		count++
	}
		return 'You got it! ' + x + ' was your number. It took ' + count + ' tries.'

	}
}
