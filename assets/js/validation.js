function validateForm()                                    
{ 
    
    var name = document.forms["myForm"]["name"];
    var phone = document.forms["myForm"]["phone"];    
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus(); 
        return false; 
    }
    else{
        document.getElementById('errorname').innerHTML="";  
    }

    if (phone.value == "")                                   
    { 
        document.getElementById('errorphone').innerHTML="Please enter a valid phone number"; 
        phone.focus(); 
        return false; 
    }
    else{
        document.getElementById('errorphone').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }
    else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}