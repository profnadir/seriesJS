function afficherForm(){
    let form = document.getElementsByClassName('add')[0];
    form.style.display = "block";
}
function cacherForm(){
    let form = document.getElementsByClassName('add')[0];
    form.style.display = "none";
}
function ajouter() {
    let list = document.getElementById('list');
    let tr = document.createElement('tr');

    // code 
    let code = document.getElementById('code').value; //15
    let tdCode = document.createElement('td'); // <td></td>
    tdCode.textContent = code;// <td>15</td>
    tr.appendChild(tdCode);

    // nom 
    let nom = document.getElementById('nom').value;
    let tdnom = document.createElement('td');
    tdnom.textContent = nom;
    tr.appendChild(tdnom);

    // prenom 
    let prenom = document.getElementById('prenom').value;
    let tdprenom = document.createElement('td');
    tdprenom.textContent = prenom;
    tr.appendChild(tdprenom);

    // semestre 
    let semestre = document.getElementById('semestre').value;
    let tdsemestre = document.createElement('td');
    tdsemestre.textContent = semestre;
    tr.appendChild(tdsemestre);

    // filiere 
    let filiere = document.getElementById('filiere').value;
    let tdfiliere = document.createElement('td');
    tdfiliere.textContent = filiere;
    tr.appendChild(tdfiliere);

   /*  tr.id="test"; */
    tr.setAttribute('onclick',"selected(this)");

    list.appendChild(tr);
}

function selected(tr) {
    /* tr.style.backgroundColor = "green"; */
    tr.classList.toggle("selected");
}

function supprimer(){
    let listToDelete = document.getElementsByClassName('selected');

    while(listToDelete.length){
        listToDelete[0].remove();
    }
}