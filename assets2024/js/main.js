const showDescBtn = document.querySelector("#show-desc");
const showDescText = document.querySelector(".products-desc");
const productsCategoriesBtns = document.querySelectorAll('.products-categories button');
let isShowDescActive = false;

function removeActiveFromBtns() {
    productsCategoriesBtns.forEach(btn => btn.classList.remove('active'));
}

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

productsCategoriesBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        removeActiveFromBtns();
        this.classList.add('active');
    });
})