let styles = ['Jazz','Blues'];
console.log(styles);

styles.push('Rock&Roll');
console.log(styles);

if(styles.length % 2 == 1){
    styles.splice(parseInt(styles.length/2),1,'Classics')
    /* styles[parseInt(styles.length/2)] = 'Classics'; */
    console.log(styles);
}

console.log('la valeur suprimée est : ' + styles.shift());

styles.unshift('Rap','Raggae');
console.log(styles);


