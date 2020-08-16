function indicator(element) {
	marker.style.left = element.offsetLeft+'px';
	marker.style.width = element.offsetWidth+'px';
}

function getElementOffset(el) {
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
  };
}