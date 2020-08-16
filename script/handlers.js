function menuOperating() {
	if (!line.classList.contains('line-active')) {
		menu.classList.remove('unactive');
		line.classList.add('line-active');
	} else {
		menu.classList.add('unactive');
		line.classList.remove('line-active');
	}
}

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