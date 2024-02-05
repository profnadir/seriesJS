function afficherForm() {
    let form = document.getElementById('addEtudiant');
    form.style.display = "block";
}

function cacherForm() {
    let form = document.getElementById('addEtudiant');
    form.style.display = "none";
}

function ajouter(){
    
    let list = document.getElementById('list');
    let tr = document.createElement('tr');

    // code 
    let code = document.getElementById('code').value; //15
    let tdCode = document.createElement('td'); // <td></td>
    tdCode.textContent = code; // <td>15</td>
    tr.appendChild(tdCode);

    // nom
    let nom = document.getElementById('nom').value; 
    let tdNom = document.createElement('td'); 
    tdNom.textContent = nom; 
    tr.appendChild(tdNom);

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

    tr.setAttribute('onclick','selected(this)')

    list.appendChild(tr);

}


function selected(tr) {
    //tr.style.backgroundColor = "green";
    tr.classList.toggle("selected");
}

function supprimer() {
    let students = document.querySelectorAll('.selected');
    console.log(students);
    console.log(students.length);
   for (let i = 0; i < students.length; i++) {
        students[i].remove();
   }
}
