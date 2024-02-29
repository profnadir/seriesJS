function Verif(myForm) {

    let nom = myForm.fullname;
    if(nom.value === ""){
        error(nom,"(*) Champs obligatoire")
        return false;
    }
    else{
        nom.nextElementSibling.innerHTML = "";
    }

    let cin = myForm.cin;
    if(cin.value === ""){
        error(cin,"(*) Champs obligatoire")
        return false;
    }
    else{
        cin.nextElementSibling.innerHTML = "";
    }

    let email = myForm.email;
    if(email.value === ""){
       error(email,"(*) Champs obligatoire")
        return false;
    }
    else{
        email.nextElementSibling.innerHTML = "";
    }
   
    if(isNaN(cin.value)){
       error(cin,"CIN doit etre number")
        return false;
    }
    else{
        cin.nextElementSibling.innerHTML = "";
    }

    return true;
}

/* function error(input) {
     input.nextElementSibling.innerHTML = "(*) Champs obligatoire";
     input.nextElementSibling.style.color= "orange";
} */

function error(input,msg) {
    input.nextElementSibling.innerHTML = msg;
    input.nextElementSibling.style.color= "orange";
}