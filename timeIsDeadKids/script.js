function init(){
    //test d8s
    //November 28, 2018 16:25:00
    //November 27, 2018 16:25:00
    
    var d1 = new Date(document.getElementById('date1').value);
    var d2 = new Date(document.getElementById('date2').value);
    
    //default d8 function in JS gives you the result in milliseconds
    var seconds = Math.floor((d2 - (d1))/1000);     //1000 ms in 1 sec
    var minutes = Math.floor(seconds/60);           //60secs in 1 min
    var hours = Math.floor(minutes/60);             //60mins in 1 hr
    var days = Math.floor(hours/24);                //24 hrs in a day
    
    //subtracting to get only the specific time for each unit
    var hours = hours - (days*24);
    var minutes = minutes-(days*24*60)-(hours*60);
    var seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
    
    if(d2 - (d1) < 0){//If we have any time travellers
        document.getElementById("timeTravel").innerHTML ='Bill and Ted are in for yet another excellent adventure.';
       }
    else{
        document.getElementById("timeTravel").innerHTML ='';
    }

     document.getElementById("rDay").innerHTML = "Time remaining:\nDays: " + days + " | Hours: " + hours + " | Minutes: " + minutes + " | Seconds: " + seconds;
}
