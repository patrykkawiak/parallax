let first = document.querySelector('.first');
let bottom = document.querySelector('.second');
let content = document.querySelector('.content');
let img = document.querySelector('img');
let desc = document.querySelector('.desc');
const parallax = () => {
	let scrollValue = window.scrollY;
	console.log(scrollValue);

	if (scrollValue < 800) {
		first.style.setProperty('--a', `${scrollValue * 2}px`);
		bottom.style.setProperty('--b', `-${scrollValue * 2}px`);
		first.classList.remove('none');
		bottom.classList.remove('none');
		content.classList.remove('flex');
	} else if (scrollValue < 1750) {
		first.classList.add('none');
		bottom.classList.add('none');
		content.classList.add('flex');

		img.style.transform = `translateX(${1700 - scrollValue}px)`;
		desc.style.transform = `translateX(-${1700 - scrollValue}px)`;
		img.classList.remove('animation');
		desc.classList.remove('animation');
	} else if (scrollValue > 1900){
		img.classList.add('animation');
		desc.classList.add('animation');

        
	}
};

window.addEventListener('scroll', parallax);
