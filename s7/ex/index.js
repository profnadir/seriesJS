function Verif(myForm) {
    let fullname = myForm.fullname;
    if(fullname.value == ""){
        handleError(fullname,"fullname est obligatoire");
        return false;
    }
    else{
        handleError(fullname)
    }

    let cin = myForm.cin;
    if(cin.value == ""){
        //alert('CIN champs obligatoire');
        handleError(cin,"cin est obligatoire");
        return false;
    }
    else{
        handleError(cin);
    }

    if(isNaN(cin.value)){
        handleError(cin,"la CIN doit etre NUMBER")
        return false;
    }
    else{
        handleError(cin)
    }

    let email = myForm.email;
    if(email.value == ""){
        handleError(email,"Email est obligatoire");
        return false;
    }
    else{
        handleError(email)
    }
    alert('ok');
    return true
}

/* function showError(input,msg) { 
    input.nextElementSibling.innerHTML = msg;
    input.nextElementSibling.style.color = "orange";
}

function hideError(input) {
    input.nextElementSibling.innerHTML = "";
    input.style.backgroundColor = "green";
} */

/* let age = 19;

if(age>18) {
    alert('ok')
}else{
    alert('ko')
}

 age>18 ? 'ok' : 'ko'; */

function handleError(input,msg){
    if(msg){
        input.nextElementSibling.innerHTML = msg;
        input.nextElementSibling.style.color = "orange";
    }else{
        input.nextElementSibling.innerHTML = "";
        input.style.backgroundColor = "green";
    }
}