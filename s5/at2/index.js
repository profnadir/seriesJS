function SupprimerUnElement(){
    let ol = document.querySelector('#liste');
    if(ol.children.length > 0){
        ol.removeChild(ol.lastElementChild);
    }else{
        alert('Attention. La liste est vide')
    }
}