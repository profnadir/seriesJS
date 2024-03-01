/* let expr = /^[A-Z]{3,15}\s[A-Z][a-z]{2,14}$/;

let txt = 'JOHHHHHHHHHHHHH Doe';

console.log(expr.test(txt)); */

//let expr = new RegExp('i');

let expr = /(ma|com)/; 

let txt = 'com';

console.log(expr.test(txt));

//console.log(txt.match(expr));


/* let ex1 = /\bword\b/

let tx = 'word'
let tx = 'wording'
let tx = 'hidevwording' */


let regCin = /^[A-Z]{1,2}[0-9]{3,6}$/

let cin = 'AA124569'

console.log(regCin.test(cin));

/* const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const emailRegexOfppt = /^[a-zA-Z0-9._-]+@(ofppt-edu|ofppt)+\.[a-zA-Z]{2,4}$/;

let mail = 'nadir@ofppt-info.com';

console.log(emailRegexOfppt.test(mail)); */