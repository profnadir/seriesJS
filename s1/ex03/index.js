let nbsec = prompt('Entrez le nombre des secondes ?','25300')

let h = parseInt(nbsec / 3600);

let reste = nbsec % 3600;

let min = parseInt(reste / 60);

let sec = reste % 60;

document.getElementById('resultat').innerHTML = h + ": " + min + ": " + sec

console.log(h,min,sec);