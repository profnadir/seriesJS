function Verif(myForm) {

    // start validation module
    let module = myForm.module;

    if (module.selectedOptions.length == 0 || module.selectedOptions.length > 2) {
         handleError(module, "Vous devez choisir au moins 2 modules");
         return false;
     }
     else {
        handleError(module)
     } 

    // end validation module


    // start validation niveau
    let niveau = myForm.niveau;

    /*  if (niveau.value == "") {
         //handleError(niveau[niveau.length-1].nextElementSibling, "Vous devez choisir au moin le niveau secondaire");
         document.getElementById('error-niveau').innerHTML = "Vous devez choisir au moin le niveau secondaire";
         return false;
     }
     else {
         //handleError(niveau[niveau.length-1].nextElementSibling)
         document.getElementById('error-niveau').innerHTML = "";
     } */

    myForm.niveau[0].checked = true;

    // end validation niveau


    // start validation fullname

    let fullname = myForm.fullname;

    if (fullname.value == "") {
        handleError(fullname, "fullname est obligatoire");
        return false;
    }
    else {
        handleError(fullname)
    }

    let regName = /^[A-Z]{3,15}\s[A-Z][a-z]{2,14}$/; //JOHN Doe // gfsdgsd

    if (!regName.test(fullname.value)) {
        handleError(fullname, "fullname doit respecter la forme suivante : XXXXXX Yzzzzzz : JOHN Doe");
        return false;
    }
    else {
        handleError(fullname)
    }

    // end validation fullname




    // start validation cin

    let cin = myForm.cin;
    if (cin.value == "") {
        //alert('CIN champs obligatoire');
        handleError(cin, "cin est obligatoire");
        return false;
    }
    else {
        handleError(cin);
    }

    let regCIN = /^[A-Z]{1,2}\d{3,6}$/;

    if (!regCIN.test(cin.value)) {
        //alert('CIN champs obligatoire');
        handleError(cin, "cin doit avoir la forme suivante : XX123456");
        return false;
    }
    else {
        handleError(cin);
    }

    /*     if(isNaN(cin.value)){
            handleError(cin,"la CIN doit etre NUMBER")
            return false;
        }
        else{
            handleError(cin)
        } */

    // end validation cin

    // start validation email
    let email = myForm.email;
    if (email.value == "") {
        handleError(email, "Email est obligatoire");
        return false;
    }
    else {
        handleError(email)
    }

    if (email.value.indexOf('@') == -1) {
        handleError(email, "Email doit comporter @");
        return false;
    }
    else {
        handleError(email)
    }

    // end validation email




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

function handleError(input, msg) {
    if (msg) {
        input.nextElementSibling.innerHTML = msg;
        input.nextElementSibling.style.color = "red";
    } else {
        input.nextElementSibling.innerHTML = "";
        //input.style.backgroundColor = "green";
    }
}