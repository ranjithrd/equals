export const repeat = (callback, times) => {
	if (times == 0) {
		callback()
	} else {
		callback()
		repeat(callback, times - 1)
	}
}

export const randomBetween = (min, max) => {
	return Math.round(min + Math.random() * (max - min))
}
