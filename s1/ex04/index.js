function cc() {
    let r = document.getElementById('rayon').value;
    let cc = 2 * Math.PI * r;
    document.getElementById('cc').innerHTML = cc.toFixed(2);
}

function sc() {
    let r = document.getElementById('rayon').value;
    let sc = Math.PI * r**2;
    document.getElementById('sc').innerHTML = sc.toFixed(2);
}

function ss() {
    let r = document.getElementById('rayon').value;
    let ss = 4 * Math.PI * r**2;
    document.getElementById('ss').innerHTML = ss.toFixed(2);
}

function vs() {
    let r = document.getElementById('rayon').value;
    let vs = (4/3) * Math.PI * Math.pow(r,3);
    document.getElementById('vs').innerHTML = vs.toFixed(2);
}