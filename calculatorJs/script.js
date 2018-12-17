function endVal(){//<-That's a function right there
    document.getElementById('field').value = eval(document.getElementById("field").value);
    
    if(document.getElementById("field").value == 'Infinity'){
        document.getElementById("field").value = 'NaN';
        alert('Divide by zero detected.');
        
    }
}