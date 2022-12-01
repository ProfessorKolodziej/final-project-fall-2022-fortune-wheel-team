// Add your scripts here
const button = document.querySelector('#spin-wheel');

function spinWheel() {
	const wheel = document.querySelector('.wheel');
	wheel.classList.add('animate');
	wheel.style.animationDuration = '500ms';
}

button.addEventListener('click', spinWheel);
