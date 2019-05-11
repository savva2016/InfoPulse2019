
var goods = [
	/*0*/	{
		name: "html + css",
		identity: "apple",
		picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
	},
	/*1*/	{
		name: "JavaScript",
		identity: "peach",
		picture: "https://cdn.auth0.com/blog/es6rundown/logo.png"
	},
	/*2*/	
			{
		name: "Adobe Photoshop",
		identity: "pear",
		picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png"
	},
			{
			name: "Adobe Lightroom",
		identity: "pear",
		picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwXZZ6wnL6Tdz7XByklRbIpGlVu0QeuCEEIT4kRtjX87pbhR5F"
				
	},
			{

		name: "Adobe Primiere Pro",
		identity: "pear",
		picture: "https://dl1.cbsistatic.com/i/2017/02/02/c67627cd-c9d0-4bf6-94a7-dbf900dab1f1/3444c959261a75562a217eabec4e9184/imgingest-6597150966970685469.png"
	}		

];
$( ".button" ).click(function() {
  alert( "Ваш Зааказ добавлен к корзину" );
});

function goodsGenerating (goods) {
	var startDiv = `<div class="goods">`,
		endDiv	 = `</div>`,
		result   = ``;
	
	for (var i = 0; i < goods.length; i++) {
			var item = goods[i];
			result += `<div class="goods-item">
			<div class="goods-item-about">
				<div class="goods-item__name">${item.name}</div>
				<div class="goods-item__picture"><img src="${item.picture}" title="${item.name}"></div>
				<div class="goods-item__cost"><span class="goods-item__cost-title">Цена:</span><span class="goods-item__cost-price">${item.cost}</span></div>
				<div class="goods-item__count"><span class="goods-item__count-title">На складе:</span><span class="goods-item__count-number">${item.count}</span></div>
			</div>
			<div class="goods-item-buy" data-identity="${item.identity}">
				<button class="plus">+</button>
				<button class="sum">0</button>
				<button disabled="disabled" class="minus">-</button>
			</div>
		</div>`;
	}	
	return `${startDiv}${result}${endDiv}`
}
$('body').prepend(goodsGenerating(goods));


/* Plus method */
$(".plus").click(function(event) {
	var identity = $(this).parent().attr('data-identity')
	for (var i = 0; i < goods.length; i++) {
		var item = goods[i],
			currentSum = $(this).parent().find('.sum').text();
		if (item.identity === identity) {
			var minusIsDisabled = $(this).parent().find('.minus').attr('disabled')
			if (minusIsDisabled) {
				$(this).parent().find('.minus').removeAttr('disabled')
			}
			/*Изменение html*/
			$(this).parent().prev().find('.goods-item__count-number').text(--item.count);
			$(this).parent().find('.sum').text(++currentSum);
			if (item.count === 0) {
				$(this).attr('disabled', 'disabled');
				console.log(`На складе закончился товар ${item.name}`)
			}
			break;
		}

	}

});