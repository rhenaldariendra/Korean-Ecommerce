function validation(){
    var fname = document.getElementById('fname').value;
    var uname = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
    var pass = document.getElementById('pass').value;
    var confpass = document.getElementById('confpass').value;
    var text = document.getElementById('error_message');
    var txt

    if(fname.length < 1){
        txt = "Name must contains more than one character";
        text.innerText = txt;
        return false;
    }
    if(uname.length < 1){
        txt = "Userame must contains more than one character";
        text.innerText = txt;
        return false;
    }
    if(isNaN(phone) || phone.lenth < 10){
        txt = "Must be number";
        text.innerText = txt;
        return false;
    }
    if(phone.length < 10){
        txt = "Must contains at least 10 number";
        text.innerText = txt;
        return false;
    }
    if(age < 18){
        txt = "You must be at least 18 years old";
        text.innerText = txt;
        return false;
    }
    if(confpass.includes(pass) == false){
        txt = "Password dont match";
        text.innerText = txt;
        return false;
    }


    alert("form submitted")
    return true;

}