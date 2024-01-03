function permuter() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    let tmp; // 

    tmp = a ; // 1
    a = b; // 2
    b = c; // 3
    c = tmp; // 1

    document.getElementById('a').value = a;
    document.getElementById('b').value = b;
    document.getElementById('c').value = c;
}