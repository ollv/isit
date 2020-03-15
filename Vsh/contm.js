function disablecontext(e) {
	var clickedEl = (e==null) ? event.srcElement.tagName : e.target.tagName;
	if (clickedEl == "IMG") {
		alert(errorMsg);
		return false;
	}
	document.oncontextmenu = function() {
	return false;
}
}


var errorMsg = "Вы не можете сохранять изображения с этого сайта.";
document.oncontextmenu = disablecontext;