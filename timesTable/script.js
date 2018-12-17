function start(timesTable, start, end){
	alert('hey');
	var timesTable = +prompt('Do you have the times table? Input an integer.',"");
    if(timesTable < -13 || timesTable > 13 || timesTable != parseInt(timesTable)){//checks for integer, & if its between -12 and 12.
        alert('The times table value is invalid. Please make sure the number is between -12 and 12 and is an integer.');
        return;
    }
	var start= +prompt('When should it start? Input an integer.',"");//starting variable
    if(start != parseInt(start)){// checks for integer
        alert('Your starting number is not an integer.');
        return;
    }
	var end= +prompt('When should it end? Input an integer.',"");//ending variable
    if(end != parseInt(end)){//checks for integer
        alert('Your starting number is not an integer.');
        return;
    }
    //4 FOR LOOP FOR TH3 D1SPL4Y 4L3RTS
	for(i = start; i <= end; i++){
		alert(timesTable + '*' + i + ' = ' + timesTable * i);
	}
}