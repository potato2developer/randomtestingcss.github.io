
function pos(argument) {
	var title = document.getElementById("text1");
	var posleft = Math.floor(Math.random() * 300) +200 ;//random numbers from 200 to 300 pos
	var postop = Math.floor(Math.random() * 200) +100 ;
	title.setAttribute("style",  "color: red; position: relative; left:" + posleft +"px;" +"top:"
	+ postop + "px;" );// style setting 
console.log("Title:"+"left position: " + posleft + " top position: "+postop);
}

function block(argument){
	var block3 = document.getElementById("block2");
	var posleftblock = Math.floor(Math.random() * 300) +1 ;//random numbers from 200 to 300 pos
	var postopblock = Math.floor(Math.random() * 50) +1 ;
	var info = block3.setAttribute("style",  "width:100px; height:100px; background-color: red; position: relative; left:"
	 + posleftblock +"px;"+"top: "+postopblock+"px;"); //block settings 
	console.log(posleftblock);
}