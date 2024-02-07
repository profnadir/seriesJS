var ol = document.getElementById("liste");
var count = 0;
function AjouterUnElement() {
 
    count++;

  let li = document.createElement('li')

  switch (count) {
    case 1:
        li.textContent = "JS"; ol.appendChild(li);
        break;
  
    case 2:
        li.textContent = "PHP"; ol.appendChild(li);
        break;

    case 3:
        li.textContent = "JEE"; ol.appendChild(li);
        break;

    default:
        alert("Vous devez ajouter seulement 5 langages web")
        break;
  }

  console.log(count);
}
