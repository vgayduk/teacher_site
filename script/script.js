let pageLinks = document.querySelectorAll('a[href*="#"]');
let sections = document.querySelectorAll('section');

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

let line = document.querySelector('.line'),
	lineContainer = document.querySelector('.line-container'),
	menu = document.querySelector('.burger-menu');

function menuOperating() {
	if (!line.classList.contains('line-active')) {
		menu.classList.remove('unactive');
		line.classList.add('line-active');
	} else {
		menu.classList.add('unactive');
		line.classList.remove('line-active');
	}
}

document.body.addEventListener('click', (event) => {
	if (event.target !== menu && event.target !== lineContainer && event.target !== line) {
		menu.classList.add('unactive');
		line.classList.remove('line-active');
	}
});

lineContainer.addEventListener('click', menuOperating);

let marker = document.querySelector('#marker');

function indicator(element) {
	marker.style.left = element.offsetLeft+'px';
	marker.style.width = element.offsetWidth+'px';
}

pageLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		indicator(e.target);
	});
});

function getElementOffset(el) {
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
  };
}

document.addEventListener('scroll', switchNav);

function switchNav() {
	if(!sections.length) return;

	for(let i = 0; i < sections.length; i++) {
		if(pageYOffset >= (getElementOffset(sections[i]).top - window.innerHeight / 2)) {
			for(let j = 0; j < pageLinks.length; j++) {
				if(pageLinks[j].getAttribute('href') == ('#' + sections[i].getAttribute('id'))) {
					indicator(pageLinks[j]);
					break;
				}
			}
		}
	}
}