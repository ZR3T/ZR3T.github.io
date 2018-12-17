function down(){
    //document.getElementById("myCanvas").style.top = num + suf; 170px
    var x = document.getElementById("myCanvas").style.top;
    var num = x.slice(0, -2);
    document.getElementById("myCanvas").style.top = parseInt(num) + 10 + 'px';
}
function change(){
	document.getElementById('h').innerHTML = document.getElementById('h34d').value;
}
function up(){
    //document.getElementById("myCanvas").style.top = num + suf;
    var x = document.getElementById("myCanvas").style.top;
    var num = x.slice(0, -2);
    document.getElementById("myCanvas").style.top = parseInt(num) - 10 + 'px';
    
    if(document.getElementById("myCanvas").style.top == '170px'){
        document.getElementById("myCanvas").style.top = '180px';
    }
}

function right(){
    var x = document.getElementById("myCanvas").style.left;
    var num = x.slice(0, -2);
    document.getElementById("myCanvas").style.left = parseInt(num) + 10 + 'px';
}

function left(){
    var x = document.getElementById("myCanvas").style.left;
    var num = x.slice(0, -2);
    document.getElementById("myCanvas").style.left = parseInt(num) - 10 + 'px';
    
    if(document.getElementById("myCanvas").style.left == '0px'){
        document.getElementById("myCanvas").style.left = '10px';
    }
} 

function getPos(){
    alert('left: ' + document.getElementById("myCanvas").style.left);
    alert('top: ' + document.getElementById("myCanvas").style.top);
}