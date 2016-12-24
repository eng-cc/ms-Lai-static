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

var randmani = function () {
	var arr = ['fadeIn', 'bounceInUp', 'bounceInDown', 'rotateIn', 'flipInY', 'rollIn', 'bounceInRight', 'fadeInLeftBig']
	var num = Math.floor(Math.random()*6)
	return arr[num]
}

var ani = function () {
	for (var i = 0; i < qa('.ani').length; i++) {
		for (var j = 0; j < qa('.ani')[i].classList.length; j++) {
			if (qa('.ani')[i].classList[j] !== 'ani' && qa('.ani')[i].classList[j] !== 'text' && qa('.ani')[i].classList[j] !== 'text-right' && qa('.ani')[i].classList[j] !== 'evelyn') {
			qa('.ani')[i].classList.remove(qa('.ani')[i].classList[j])
			}
		}
	}
	for (var i = 0; i < qa('.ani').length; i++) {
		qa('.ani')[i].classList.add('animated')
		qa('.ani')[i].classList.add(randmani())
	}
}

var changeImg = function (next) {
	ani()
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

q('footer').classList.add('footermar')

var autoani = function () {
	for (var i = 0; i < qa('div').length; i++) {
		qa('div')[i].classList.add('animated')
		qa('div')[i].classList.add(randmani())
	}
	for (var i = 0; i < qa('p').length; i++) {
		qa('p')[i].classList.add('animated')
		qa('p')[i].classList.add(randmani())
	}
	for (var i = 0; i < qa('a').length; i++) {
		qa('a')[i].classList.add('animated')
		qa('a')[i].classList.add(randmani())
	}
	for (var i = 0; i < qa('span').length; i++) {
		qa('span')[i].classList.add('animated')
		qa('span')[i].classList.add(randmani())
	}
	for (var i = 0; i < qa('li').length; i++) {
		qa('li')[i].classList.add('animated')
		qa('li')[i].classList.add(randmani())
	}
}

autoani()
