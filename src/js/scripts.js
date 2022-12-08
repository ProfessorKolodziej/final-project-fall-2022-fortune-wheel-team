const titleBtn = document.querySelector('.title_btn');
function showInstructions() {
	if (document.querySelector('#tooltip') !== null) {
		document.querySelector('#tooltip').remove();
		return;
	}
	const title = '1. Choosing the eight food categories that you are interested in.<br>'
        + '2. Click them, then they will show on the wheel.<br>'
        + '3. Click the “FIGURE” button to make the wheel spin. <br>'
        + '4. The “POP UP” area is your choice!<br>'
        + '5. If you are not satisfied with your current choice, click the “CLEAR” button to reselect and click them again.<br>'
        + '6. Repeat the above steps until the final choice is made.<br>'
        + '7. Click your final choice, we will lead you to the related Yelp page!';

	const tooltip = document.createElement('div');

	tooltip.innerHTML = `<div id="tooltip">${title}</div>`;
	this.appendChild(tooltip);
	this.onmouseout = function () {
		tooltip.remove();
	};
}
titleBtn.addEventListener('click', showInstructions);

let items = 0;

let arr = [];
function wheel() {
	const main = document.querySelector('.shuju');
	main.innerHTML = '';

	const lightFragment = document.createDocumentFragment();
	// eslint-disable-next-line
	for (let i = 0; i < 8; i++) {
		const lightItem = document.createElement('div');
		if (arr[i]) {
			lightItem.innerHTML = `<img class="foot" src=${arr[i]}>`;
		}
		const deg = (360 / 8) * i;
		lightItem.style.transform = `rotate(${deg}deg)`;
		lightFragment.appendChild(lightItem);
	}
	main.appendChild(lightFragment);
}
wheel();

const selectItem = document.querySelector('.select_item');
function clickandShow(e) {
	const { target } = e;
	console.log('%c 开始测试 ', 'color:#fff; background:#00897b ');
	console.log(target);

	if (target.tagName === 'DIV' && target.className !== 'select_item') {
		if (target.className === 'bt') {
			target.className = '';
			// eslint-disable-next-line
			items--;
			arr.splice(arr.indexOf(target.children[0].src), 1);
		} else if (items < 8) {
			target.className = 'bt';
			arr.push(target.children[0].src);
			// eslint-disable-next-line
			items++;
		} else {
			alert('You can only choose 8 items');
		}
		wheel();
	}
}
selectItem.addEventListener('click', clickandShow);

// eslint-disable-next-line
let timer = null;
let rotate = 0;
let ok = true;

const spinWheel = document.querySelector('.dianji');
function spintheWheel() {
	const shuju = document.querySelector('.shuju');

	if (items === 8) {
		if (shuju.className === 'shuju' && ok) {
			ok = false;

			const deg = Math.floor(Math.random() * 360) + 360 * 3;
			shuju.style.transform = `rotate(${rotate + deg}deg)`;

			timer = setTimeout(() => {
				ok = true;
				rotate += deg;
			}, 5000);
		} else {
			alert('You have already clicked the button');
		}
	} else {
		alert('You have not selected 8 items');
	}
}
spinWheel.addEventListener('click', spintheWheel);

const clearWheel = document.querySelector('.CLEAR');
function cleartheWheel() {
	const shuju = document.querySelector('.shuju');
	const bt = document.querySelectorAll('.bt');
	// eslint-disable-next-line
	for (let i = 0; i < bt.length; i++) {
		bt[i].className = '';
	}
	items = 0;
	arr = [];
	shuju.style.transform = 'rotate(0deg)';
	wheel();
}
clearWheel.addEventListener('click', cleartheWheel);
