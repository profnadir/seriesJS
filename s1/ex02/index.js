function distance() {
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    let y1 = document.getElementById('y1').value;
    let y2 = document.getElementById('y2').value;

    let resultat = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));

    document.getElementById('resultat').innerHTML = resultat.toFixed(4)
}