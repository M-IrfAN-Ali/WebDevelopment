console.log("Js working fine and good");

var div = new Array;
div[0] = "errFirst";
div[1] = "errLast";
div[2] = "errMail";
div[3] = "errId";
div[4] = "errPass";
div[5] = "errConfirmPass";

function validate(){
    

    
var input = new Array;
input[0] =document.getElementById("first").value;
input[1] =document.getElementById("last").value;
input[2] =document.getElementById("email").value;
input[3] =document.getElementById("id").value;
input[4] =document.getElementById("pass").value;
input[5] =document.getElementById("confirmPass").value;
    
var err = new Array;
    err[0] = "<span style = ' color: red;'> Please enter the First Name </span>"
    err[1] = "<span style = ' color: red;'> Please enter the Last Name </span>"
    err[2] = "<span style = ' color: red;'> Please enter the Email </span>"
    err[3] = "<span style = ' color: red;'> Please enter the ID  </span>"
    err[4] = "<span style = ' color: red;'> Please enter the Password  </span>"
    err[5] = "<span style = ' color: red;'> Please enter the Confirm Password </span>"

for(i in input){
    var error = div[i];
    var errMsg = err[i];
    if(input[i] ==""){
        document.getElementById(error).innerHTML = errMsg; 
        }
    else if(i==2){
        var atpos=input[i].indexOf("@");
        var dotpos=input[i].lastIndexOf(".");
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=input[i].length){
            document.getElementById('errMail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
    }
        else{
            document.getElementById(error).innerHTML="OK!";
        }
    }
    else if(i==5){
        var first=document.getElementById('pass').value;
        var second=document.getElementById('confirmPass').value;
        if(second != first){
            document.getElementById('errConfirmPass').innerHTML="<span style='color:red'>Your Confirm Password donot match</span>";
        }
        else{
            document.getElementById(error).innerHTML="OK!"; }
    }
    else{
            document.getElementById(error).innerHTML="OK!"; }
   
       }
    }
    function finalvalidate(){
        var count = 0;
        for(i=0; i<6; i++){
            var error=div[i];
            if(document.getElementById(error).innerHTML=="OK!")
            count = count + 1;
        }
        if (count==6){
            document.getElementById('errFinal').innerHTML="<span style='color:green'>All the data you enter is correct and valid <br> Thank you for your time!</span>"
        }
    };
            
