function Verif(myForm) {

    let modules = myForm.modules;
    if(modules.selectedOptions.length == 0 || modules.selectedOptions.length > 2){
        handlError(modules,"vous devez choisir deux options")
        return false;
    }
    else{
        handlError(modules)
    }
    
    let niveau = myForm.niveau;
    
    if(niveau.value === ""){
        document.getElementById('niveau-error').innerHTML = "vous devez choisir au moins le niveau secondaire"
        document.getElementById('niveau-error').style.color = "red";
        return false;
    }
    else{
        document.getElementById('niveau-error').innerHTML = ""
    }

    let nom = myForm.fullname;
    if(nom.value === ""){
        handlError(nom,"(*) Champs obligatoire")
        return false;
    }
    else{
        handlError(nom)
    }

   
    let expr = /^[A-Z]{3,15}\s[A-Z][a-z]{2,14}$/;

    if(!expr.test(nom.value)){
        handlError(nom,"Le fullname doit respecter la forme suivante : XXXXXXXX Yzzzzzzz : JOHN Doe")
        return false;
    }
    else{
        handlError(nom)
    }

    let cin = myForm.cin;
    if(cin.value === ""){
        handlError(cin,"(*) Champs obligatoire")
        return false;
    }
    else{
        handlError(cin)
    }

    let regCin = /^[A-Z]{1,2}[0-9]{3,6}$/
    if(!regCin.test(cin.value)){
        handlError(cin,"Le CIN doit avoir le format suivant : XX123456")
        return false;
    }
    else{
        handlError(cin)
    }

    /* if(isNaN(cin.value)){
        handlError(cin,"CIN doit etre number")
         return false;
     }
     else{
        handlError(cin)
     } */

    let email = myForm.email;
    if(email.value === ""){
       handlError(email,"(*) Champs obligatoire")
        return false;
    }
    else{
        handlError(email);
    }

    if(email.value.indexOf('@')==-1){
        handlError(email,"l'email doit comporter @")
         return false;
     }
     else{
         handlError(email);
     }
    
   
   

    alert('Inscription achevée !!')

    return true;
}

/* function error(input) {
     input.nextElementSibling.innerHTML = "(*) Champs obligatoire";
     input.nextElementSibling.style.color= "orange";
} */

/* function error(input,msg) {
    input.nextElementSibling.innerHTML = msg;
    input.nextElementSibling.style.color= "red";
}

function hideError(input) {
    input.nextElementSibling.innerHTML = "";
    input.style.borderColor = "green"
} */

function handlError(input,msg){
    if(msg){
        input.nextElementSibling.innerHTML = msg;
        input.nextElementSibling.style.color= "red";
    }else{
        input.nextElementSibling.innerHTML = "";
        input.style.borderColor = "green"
    }
}