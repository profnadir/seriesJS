// Ecrire un code JavaScript permettant de :
// a) Affichez le nœud d’id serveur, son type et sa valeur ?

let serveurNode = document.getElementById('serveur');
console.log(serveurNode);
console.log(serveurNode.nodeName);
console.log(serveurNode.nodeType);
console.log(serveurNode.nodeValue);
console.log(serveurNode.innerHTML);
console.log(serveurNode.textContent);


console.log('----------------------------------------');

// b) Affichez le nœud d’id javascript , son type et sa valeur ?

let jsNode = document.getElementById('javascript');
console.log(jsNode);
console.log(jsNode.nodeName);
console.log(jsNode.nodeType);
console.log(jsNode.nodeValue);
console.log(jsNode.innerHTML);
console.log(jsNode.textContent);

console.log('----------------------------------------');

// c) Affichez les nœuds h1 ?

let h1s = document.getElementsByTagName('h1')
console.log(h1s);

for(let i=0; i<h1s.length; i++){
    console.log(h1s[i].innerHTML);
    h1s[i].style.color="red"
}


console.log('----------------------------------------');

// d) Affichez le innerHTML des classes langages ?

let els1 = document.getElementsByClassName('langages')
for(let i=0; i<els1.length; i++){
    console.log(els1[i].innerHTML);
}

// e) Affichez le texte des classes langages ?

for(let i=0; i<els1.length; i++){
    console.log(els1[i].textContent);
}

// f) Affichez le innerHTML des classes langages seulement pour 
// le client ?

let cl = document.querySelector('#client .langages')
console.log(cl);

console.log('----------------------------------------');

let sl = document.querySelector('#serveur .langages')
console.log(sl);

// g) Affichez le href de l’id javascript.

let js = document.getElementById('javascript')
console.log(js.firstElementChild.href);

console.log('----------------------------------------');



// h) Remplacez le href de l’id javascript par " bliaudet.free.fr "
// et affichez le nouvel href. 
