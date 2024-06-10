const touches = [...document.querySelectorAll('.bouton')];
const listekeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener("click", (e) => {
    const valeurclick = e.target.dataset.key;
    calculer(valeurclick);
    
})

const calculer = (valeur) =>{
    if(listekeycode.includes(valeur)){
        switch(valeur){
            case "8":
                ecran.textContent = ""; break;
            case "13":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul; break;
            default:
                const indexkeycode = listekeycode.indexOf(valeur);
                const touche = touches[indexkeycode];
                ecran.textContent += touche.innerHTML;

        }
    }
}

window.addEventListener('error', (e) =>{
    alert("Une erreur est survenue dans votre saisie: " +e.message);
});
