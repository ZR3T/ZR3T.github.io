/******************************************************
*Simple Function Calling
******************************************************/

//age calculat8er
function calculateAge(birthYear){
    return 2018 - birthYear;
}

function yearsTilDeath(bYear, firstName){
    var age = calculateAge(bYear);
    var tilDeath = 80 - age;
    document.write(firstName + ' dies in ' + tilDeath + ' years.')
}

yearsTilDeath(2002, 'Alec');