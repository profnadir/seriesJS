function changer() {
    document.getElementById('inp1').value = 'javascript';
}

function calculer() {
    let inp2 = document.getElementById('inp2').value;
    document.getElementById('inp3').value = inp2.trim().split(' ').length
}

function test() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    //document.getElementById('c').value = (a + ' ').concat(b)
    //document.getElementById('c').value = a.concat(' ' + b);
    document.getElementById('c').value = a.concat(' ').concat(b);
}