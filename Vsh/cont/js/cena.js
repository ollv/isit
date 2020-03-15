function out() {
	var p;
	p = document.getElementById('out');
	//p.innerHTML = 'Hello';
	//Дописать информацию
	//p.innerHTML += ' <b>Hello</b>';
	// или
	//p.innerHTML = p.innerHTML + 'Hello';
	//p.innerText += ' Hi';
	//p.insertAdjacentHTML('beforeBegin', '5');
	//p.insertAdjacentHTML('afterBegin', '5');
	//p.insertAdjacentHTML('beforeEnd', ' 500');
	p.outerHTML = '<div class="one">$ 10</div>';
}