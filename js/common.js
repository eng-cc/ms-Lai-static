var qa = function (css) {
	return document.querySelectorAll(css)
}

var q = function (css) {
	return document.querySelector(css)
}

var imgStatus = 0

var hide = function () {
	var imgs = qa('.self')
	for (var i = imgs.length - 1; i >= 0; i--) {
		imgs[i].classList.remove('in')
	}
}

var changeImg = function (next) {
	hide()
	var imgs = qa('.self')
	imgStatus = next ? imgStatus + 1 : imgStatus - 1
	if (imgStatus > imgs.length - 1) {
		imgStatus = 0
	}
	console.log(imgStatus)
	if (imgStatus <= -1) {
		imgStatus = imgs.length - 1
	}
	console.log(imgs[imgStatus])
	imgs[imgStatus].classList.add('in')
}