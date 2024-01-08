let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock&Roll");
console.log(styles);

if (styles.length % 2 == 1) {
    styles[parseInt(styles.length / 2)] = 'Classics'
  /* styles.splice(parseInt(styles.length / 2), 1, "Classics"); */
  console.log(styles);
}

/* styles.splice(0,1); */
/* styles.shift(); */
console.log('La valeur suprimé est : ' + styles.shift());
console.log(styles);

styles.unshift('Rap','Raggae');
console.log(styles);

