function maj() {
    let chaine = document.getElementById('chaine').value;
    document.getElementById('res').value = firstMajAll(chaine);
}

function firstMajAll(chaine) {
    let tab1 = chaine.trim().split(" ");
    console.log(tab1);

    let tab2 = [];
    for(let i= 0; i<tab1.length ; i++){
        tab2[i] = tab1[i][0].toUpperCase() + tab1[i].slice(1)
    }

    console.log(tab2);

    return tab2.join(" ");
}

function firstMajOne(chaine) {
    return chaine[0].toUpperCase() + chaine.slice(1);
}

function myReverse(chaine){

    console.log(chaine);
    console.log(chaine.split(""));
    console.log(chaine.split("").reverse());
    console.log(chaine.split("").reverse().join());

    return chaine.split("").reverse().join("");
}
