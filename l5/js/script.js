// var arr = ["one" , "two" , "three" , "Kompot" , "88888"];
// console.log(arr[3]);
// console.log(arr.length-1)
// var string = "Мама мыла раму";
// var searchString = "мыла";
// if (string.indexOf(searchString) > -1) {
//     console.log(true); 
// }
// else{
// 	console.log(false);
// }
// var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cupiditate repellat consequuntur, laboriosam vitae corporis blanditiis debitis quis maxime sunt, dolor, expedita! Aspernatur possimus aperiam voluptas amet, dolores pariatur officiis. ipsum dolor sit amet, consectetur adipisicing elit. Facere magnam aut natus libero hic nostrum sunt iure facilis rerum, non voluptates voluptatum, error impedit ea reprehenderit ducimus rem iusto soluta. ipsum dolor sit amet, consectetur adipisicing elit. Labore hic dignissimos aliquid repellat ad culpa? Officia facere reiciendis, harum nostrum totam fugiat sit nesciunt est ratione quidem, quasi impedit voluptas. ipsum dolor sit amet, consectetur adipisicing elit. Eos animi, enim ullam consequatur ad ipsa quaerat voluptatem. Nulla similique assumenda alias perferendis voluptatibus voluptates neque voluptatem nesciunt, atque suscipit unde.";
// var ipsum = "ipsum";
// var firstChar = string.indexOf(ipsum);
// var arr = [];
// for (var i = 0; i < string.length; i++) {

	
// }
// console.log(firstChar);
chek();
function chek () {
	var result =  prompt("Введите число", "");
	if (result.indexOf(",") > -1) {
		alert("Используйте вместо запятой - точку!")
		chek();
	}else{
		kv(result);
	}
}
function kv (number) {
	console.log(number * number)
}
