const AjouterUnElement = () => {
    let title = document.getElementById('title');

    if(title.value != ''){
        let ol = document.getElementById('liste');

        if(ol.children.length < 5){
            let li = document.createElement('li');
            li.innerHTML = title.value.toUpperCase();

            li.innerHTML += '<button onclick="remove(this)">X</button>'
        
            ol.appendChild(li)
        
            title.value = '';
        }
        else{
            alert('Vous devez ajouter seulment 5 langages web')
        }
    }

}

function remove(btn) {
    btn.parentNode.remove();
}