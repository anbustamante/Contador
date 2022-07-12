let contadorL = document.getElementById("plocal");
let sumaL = 0;
let contadorV = document.getElementById("pvis");
let sumaV = 0;

function incrementL(puntos){
    sumaL += puntos;
    contadorL.innerText = sumaL;
}
function incrementV(puntos){
    sumaV += puntos;
    contadorV.innerText = sumaV;
}