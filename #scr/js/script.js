let burger = document.querySelector('.burger');
let burgerLines = burger.querySelector('.burger__lines');
let nav = document.querySelector('.nav');
let body = document.querySelector('body');

if (burger) {
	burger.addEventListener('click', function() {
		burger.classList.toggle('active');
		burgerLines.classList.toggle('active');
		nav.classList.toggle('active');
		body.classList.toggle('lock');
	})
};