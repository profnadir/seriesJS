/* let expr = /^[A-Z]+$/i; 
let expr2 = new RegExp('^[A-Z]+$','i'); 

//let regMailOfppt = /^[a-zA-Z0-9.-_]+@(ofppt|ofppt-edu).(ma|com)/

/* let pattern = /word\b/

let txt2 = word ing */

/*
let txt = 'JOHN';

console.log(expr.test(txt));

console.log(txt.match(expr));

console.log(txt.replace(expr,'dev'));
 */

/* let regName = /^[A-Z]{3,15}\s[A-Z][a-z]{2,14}$/

let txt = 'JOHN Doe';

console.log(regName.test(txt)); */

/* let regCIN = /^[A-Z]{1,2}\d{3,6}$/;

let txt = 'AA566546';

console.log(regCIN.test(txt)); */

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const emailRegexOfppt = /^[a-zA-Z0-9._-]+@(ofppt|ofppt-edu)\.ma$/;

let txt = 'test@ofppt-edu.fr';

console.log(emailRegexOfppt.test(txt));