let nbr = 5;
let p=0;
let container = document.getElementById("carrousel-container");
let droite = document.getElementById("d");
let gauche = document.getElementById("g");

container.style.width = (600*nbr) + "px";

gauche.onclick=function (){
    if (p>-nbr+1)
        p--;
    if (window.innerWidth < 700 ){
        container.style.transform="translate(" +p*300+"px)"
        container.style.transition="all 0.5s ease"
    }
    else {
        container.style.transform="translate(" +p*600+"px)"
        container.style.transition="all 0.5s ease"
    }
}


droite.onclick=function (){
    if (p<0)
        p++;
    if (window.innerWidth < 700 ){
        container.style.transform="translate(" +p*300+"px)"
        container.style.transition="all 0.5s ease"
    }
    else {
        container.style.transform="translate(" +p*600+"px)"
        container.style.transition="all 0.5s ease"
    }
}