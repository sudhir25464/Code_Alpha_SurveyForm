function validate(){
    var nm= document.getElementById("name").value;
    var fnm= document.getElementById("fname").value;
    var gmail= document.getElementById("eml").value;
    var cont= document.getElementById("contact").value;

   
    if(nm==""){
        alert("Please Enter name");
        return false;
    }
    
    if(fnm==""){
        alert("please Enter name");
        return false;
    }
    
    if(gmail==""){
        alert("please Enter gmail");
        return false;
    }
    
    if(cont==""){
        alert("please Enter Mobile no");
        return false;
    }
    
    
}