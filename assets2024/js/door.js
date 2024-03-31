import data from "../data/doors.json" assert { type: "json" };

class Door {
    constructor(parentEl){
        this.parentEl = parentEl;
    };

    createHtml(){
        let doorsHtml = ``;

		data.forEach((d) => {
			doorsHtml += `
            <div class="product-item">
                <div class="product-item-image">
                    <div class="product-item-image-items">
                        ${d.guarantee ? `<img src="./assets2024/images/2-qoda-qarantiya.svg" alt="" />` : ''}
                        ${d.durability > 3 ? `<img src="./assets2024/images/zvukoizolyatsiya.png" alt="" />` : ''}
                        ${d.soundProof ? `<img src="./assets2024/images/zvukoizolyatsiya.png" alt="" />` : ''}
                        ${d.endurance ? `<img src="./assets2024/images/prochnoe_pokrytie.png" alt="" />` : ''}
                    </div>
                    <img src=${d.img} alt="door" />
                </div>
                <div class="product-item-title">
                    <div class="product-item-title-rating">
                        <img src="./assets2024/images/star-green.svg" alt="" />
                        <span>2,2</span>
                    </div>
                    <p>
                        ${d.title}
                    </p>
                </div>
                <div class="product-item-info">
                    <div class="product-item-info-left">
                        <div class="product-item-info-left-top">
                            <div class="product-item-info-prices">
                                ${d.oldPrice ? `<span>${d.oldPrice} ₽</span>` : ''}
                                <p>${d.price} ₽</p>
                            </div>
                            <div class="product-item-installments">
                                <span>Рассрочка 0%</span>
                                <p>цена при покупке от 2компл.</p>
                            </div>
                        </div>
                        <p class="low-price-guarantee">Гарантия низкой цены!</p>
                    </div>
                    <div class="product-item-info-right">
                        <div class="product-item-info-right-item">
                            <img src="./assets2024/images/durability.svg" alt="" />
                            -
                            <div class="product-item-rating" >
                                <img src="./assets2024/images/star-green.svg" alt="star" />
                                <p>${d.durability}</p>
                            </div>
                        </div>
                        <div
                            class="product-item-info-right-item">
                            <img src="./assets2024/images/protection.svg" alt="" />
                            -
                            <div class="product-item-rating" >
                                <img src="./assets2024/images/star-green.svg" alt="star" />
                                <p>${d.endurance}</p>
                            </div>
                        </div>
                        <div class="product-item-info-right-item">
                            <img src="./assets2024/images/mute.svg" alt=""/>
                            -
                            <div class="product-item-rating">
                                <img src="./assets2024/images/star-green.svg" alt="star" />
                                <p>${d.soundProof}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-item-availability">
                    <p>Цена продажи актуальна</p>
                    <div class="product-item-quantity">
                        <p>Наличие на складах</p>
                        <div class="quantity"></div>
                    </div>
                </div>
                <div class="product-item-btns">
                    <button>
                        <i class="fa-solid fa-cart-shopping"></i>
                        Добавить в корзину
                    </button>
                    <button>
                        Заказать расчет со скидками
                    </button>
                </div>
            </div>
            `;
		});

        return doorsHtml;
    };

    render() {	
        const html = this.createHtml();
        
        document.querySelector(this.parentEl).innerHTML = html;
	}
}

export default Door;
