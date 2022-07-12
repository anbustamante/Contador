let contadorL = document.getElementById("plocal");
let sumaL = 0;
let contadorV = document.getElementById("pvis");
let sumaV = 0;
let banderaL = 0;
let banderaV = 0;

function incrementL(puntos){
    sumaL += puntos;
    contadorL.innerText = sumaL;
    banderaL = 1;
    banderaV = 0;
}
function incrementV(puntos){
    sumaV += puntos;
    contadorV.innerText = sumaV;
    banderaL = 0;
    banderaV = 1;
}

function newgame(){
    sumaL = 0;
    sumaV = 0;
    contadorV.innerText = sumaL;
    contadorL.innerText = sumaV;
}