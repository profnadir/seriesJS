var parent = document.getElementById("parent");
var enfant = document.getElementById("enfant");

function handleClickEnfant() {
    console.log("Clic sur l'élément enfant !");
}

function handleClickParent() {
    console.log("Clic sur l'élément parent !");
}

parent.addEventListener("click",handleClickParent,true);

enfant.addEventListener("click", handleClickEnfant);