// var arr = ["Кошка" , "Собака" , "Заяц" , "Лиса" , "Термирнатор"];
//            X                   X                    X
// for (var i = 0; i < arr.length; i++) {
// 	if (i%2 == 0 || i == 0 ) {	
// 	console.log(arr[i]);
// 	}
		
// }
// var num = prompt("Введите кол-во покупок", "");
// var cart = [];
// for (var i = 0; i < num ; i++) {
// 	var goods = prompt("Введите название покупки", "");
// 	if (goods == null) {
// 		var message = prompt("Разгрузить корзину", "Нет")
// 		if (message === "Нет") {
// 			break;
// 		}
// 		else{
// 			 cart = "Корзина пуста"
// 			 break;
// 		}
// 	}
// 		else{
// 	       cart.push(goods);
// 		}
	
// }
// console.log(cart);
var text = prompt("Введите текст который нужно перевернуть" , "Some text")
var result = ""
for (var i = text.length - 1; i >= 0; i--) {
	result = result + text[i]
}
console.log(result);