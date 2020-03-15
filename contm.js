var errorMsg = "It is forbidden to copy private information.";
document.oncontextmenu = disablecontext;
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


