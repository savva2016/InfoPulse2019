var text = "Мама мыла раму";
    temp = ['а' ,'и', 'е' ,'ё' ,'о', 'у', 'ы'];
var arr = [];
// for (var i = 0; i < text.length; i++) {}
// var arr = text.split("")
// console.log(arr)
for (var i = text.length - 1; i >= 0; i--) {
  if (temp.indexOf(text[1]) > -1) {
  	arr.push(text[i])
  }
}
console.log(arr)