import Door from './door.js';
const showDescBtn = document.querySelector("#show-desc");
const showDescText = document.querySelector(".products-desc");
const productsCategoriesBtns = document.querySelectorAll('.products-categories button');
let isShowDescActive = false;

document.addEventListener('DOMContentLoaded', () => {
    const door = new Door('.product-items');
    door.render();
})

showDescBtn.addEventListener("click", () => {
	isShowDescActive = !isShowDescActive;

	if (isShowDescActive) {
        showDescBtn.innerText = 'скрыть'
		showDescText.classList.add("active");
	} else {
        showDescBtn.innerText = 'раскрыть'
		showDescText.classList.remove("active");
	}
});

function removeActiveFromBtns() {
    productsCategoriesBtns.forEach(btn => btn.classList.remove('active'));
}

productsCategoriesBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        removeActiveFromBtns();
        this.classList.add('active');
    });
});