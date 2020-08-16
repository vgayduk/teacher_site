let pageLinks = document.querySelectorAll('a[href*="#"]');

let sections = document.querySelectorAll('section');

let line = document.querySelector('.line'),
	lineContainer = document.querySelector('.line-container'),
	menu = document.querySelector('.burger-menu');

let marker = document.querySelector('#marker');

for (let i = 0; i < pageLinks.length; i++) {
	pageLinks[i].addEventListener('click', function(event) {
		event.preventDefault();
		let anchorId = pageLinks[i].getAttribute('href');
		document.querySelector(anchorId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}

document.body.addEventListener('click', (event) => {
	if (event.target !== menu && event.target !== lineContainer && event.target !== line) {
		menu.classList.add('unactive');
		line.classList.remove('line-active');
	}
});

lineContainer.addEventListener('click', menuOperating);

pageLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		indicator(e.target);
	});
});

document.addEventListener('scroll', switchNav);