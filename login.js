function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if ( username == "terezi" && password == "dave"){
            alert ("W3LCOM3 B4CK!");
            window.location = "testpage.html";
            return false;
    }

    else{
            alert("WRONG: 1F YOU DON'T KNOW TH3 P4SSWORD Y3T, 1T M34NS YOU'R3 NOT SUPPOS3D TO, DUMMY! GO B4CK!!! ");
            return false;
    }
}
