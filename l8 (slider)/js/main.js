// var currentColor = undefined
// $(".small").click(function(event) {
//       $(".small").removeClass('border')
//       currentColor = $(this).text().toLowerCase()
//       $(this).addClass('border')
// });
// $(".big").click(function(event) {
// 	// alert(currentColor)
// 	// alert($(this).hasClass('red'))
// 	// if ($(this).hasClass(currentColor)){alert(true)}
// 	if ($(this).hasClass(currentColor)) {
// 		alert("Цвет совпал")
// 	}
// });	
// $("div").click(function(event) {
// 	$(this).height(25).width(25) // ширина this елемента	
// });\
// $(".w10").click(function(event) {
// 	var currentWidth = $(".box").width();
// 	$(".box").width(currentWidth += 10)
// });
// $(".w-10").click(function(event) {
// 	var currentWidth = $(".box").width();
// 	$(".box").width(currentWidth -= 10)
// });
// $(".h10").click(function(event) {
// 	var currentHeight = $(".box").height();
// 	$(".box").height(currentHeight += 10)
// });
// $(".h-10").click(function(event) {
// 	var currentHeight = $(".box").height();
// 	$(".box").height(currentHeight -= 10)
// });
$("#box").click(function(event) {
	console.log($(this).innerWidth())
	console.log($(this).innerHeight())
});