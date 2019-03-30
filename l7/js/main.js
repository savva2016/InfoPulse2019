// arr = ["red" , "green" , "black" , "purple" , "yellow"];
// var currentClass = 0;
// $("#btn").click(function(event) {
// 	if (currentClass < arr.length) {
// 		$("div").removeClass(arr[currentClass-1])
// 		$("div").addClass(arr[currentClass++])
// 	}
// 	else{
// 		$("div").removeClass(arr[arr.length-1])
// 		$("div").removeClass(arr[currentClass = 0])
// 	}       
// });
var statement = true
$("#btn").click(function(event) {
	for (var i = 0; i < $("a").length; i++) {
			if($("a").eq(i).attr('href') == "http://infopulse.com"){
				$("a").eq(i).toggleClass('toogle');
				if(statement){
					$(this).text("Show infopulse links")
					statement = false
				}else{
					$(this).text("Hide infopulse links")
					statement = true


				}
			}
		}	
});



