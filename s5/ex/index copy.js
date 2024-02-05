// Ecrire un code JavaScript permettant de :
// a) Affichez le nœud d’id serveur, son type et sa valeur ?
let sNode = document.getElementById('serveur');
console.log(sNode);
console.log(sNode.nodeName);
console.log(sNode.nodeType);
console.log(sNode.nodeValue);
console.log(sNode.textContent);
console.log(sNode.innerHTML);

console.log('----------------------------------------');

// b) Affichez le nœud d’id javascript , son type et sa valeur ?
let jsNode = document.getElementById('javascript');
console.log(jsNode);
console.log(jsNode.nodeName);
console.log(jsNode.nodeType);
console.log(jsNode.nodeValue);
console.log(jsNode.textContent);
console.log(jsNode.innerHTML);

console.log('----------------------------------------');

// c) Affichez les nœuds h1 ?

let h1Nodes = document.getElementsByTagName('h1');

for(let i=0; i < h1Nodes.length; i++){
    console.log(h1Nodes[i].innerText);
    h1Nodes[i].style.color = "red";
}


console.log('----------------------------------------');

// d) Affichez le innerHTML des classes langages ?

///let els1 = document.getElementsByClassName('langages');
let els1 = document.querySelectorAll('.langages');

for(let i=0; i < els1.length; i++){
    console.log(els1[i].innerHTML);
}

// e) Affichez le texte des classes langages ?

for(let i=0; i < els1.length; i++){
    console.log(els1[i].textContent);
}

// f) Affichez le innerHTML des classes langages seulement pour 
// le client ?

let els2 = document.querySelector('#serveur .langages');
console.log(els2.innerHTML);
console.log('----------------------------------------');


// g) Affichez le href de l’id javascript.

let javascriptNode = document.getElementById('javascript');
console.log(javascriptNode.firstElementChild.href);

console.log('----------------------------------------');



// h) Remplacez le href de l’id javascript par " bliaudet.free.fr "
// et affichez le nouvel href. 

javascriptNode.children[0].href = "https://bliaudet.free.fr";

console.log(javascriptNode.children[0].href);