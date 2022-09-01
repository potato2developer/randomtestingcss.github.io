
function pos(argument) {
	var title = document.getElementById("text1");
	var posleft = Math.floor(Math.random() * 300) +200 ;//random numbers from 200 to 300 pos
	var postop = Math.floor(Math.random() * 200) +100 ;
	title.setAttribute("style",  "color: red; position: relative; left:" + posleft +"px;" +"top:"
	+ postop + "px;" );// style setting 
console.log(posleft+"left pos");
console.log(postop+"top pos");
}