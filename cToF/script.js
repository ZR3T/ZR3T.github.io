function init() {
    var Fah = parseFloat(document.getElementById('fahren').value);
    document.getElementById('cels').value = Number((Fah - 32) * (5/9));
}

function init1(){
	var Cel = parseInt(document.getElementById('cels').value);
	document.getElementById('fahren').value = Number((Cel * (9/5)) + 32);
}

function reset(){
	document.getElementById('fahren').value = "";
	document.getElementById('cels').value = "";
}