function start(){
    var age= prompt("What is your age?","");
    var ageP= parseInt(age);
    
    switch(true){
    	case(age < 15 && age >= 10 && age == ageP):
    		alert('damn, you\'re slam. Below 15.');
    		break;
    	case(age == 15 && age == ageP):
        	alert('damn, you\'re right in the middle. Exactly 15.');
    		break;
    	case(age > 15 && age <= 20 && age == ageP):
        	alert('damn, you\'re above 15.');
    		break;
    	default:
    		alert('Cook your number into integers inbetween 10 and 20.');
    		break;
    }
}