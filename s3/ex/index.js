function maj(){
    let chaine = document.getElementById('chaine').value;
    /* document.getElementById('res').value = motEnMaj(chaine); */
    document.getElementById('res').value = myreverse(chaine);
}

function motEnMaj(chaine) {
    console.log(chaine);

    let tabChaine = chaine.split(" ");
    console.log(tabChaine);

    let tab2 = [];
    for(let i = 0; i< tabChaine.length ; i++){
        console.log(tabChaine[i][0].toUpperCase() + tabChaine[i].slice(1));
        tab2.push(tabChaine[i][0].toUpperCase() + tabChaine[i].slice(1))
    }
    console.log(tab2);

    return tab2.join(" ");
}

function myreverse(chaine) {
    console.log(chaine)
    console.log(chaine.split(""))
    console.log(chaine.split("").reverse())
    console.log(chaine.split("").reverse().join(""));
    return chaine.split("").reverse().join("");
}