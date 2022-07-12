let contadorL = document.getElementById("plocal");
let sumaL = 0;
let contadorV = document.getElementById("pvis");
let sumaV = 0;
let bandera = 0;
let historial = [];

function incrementL(puntos){
    sumaL += puntos;
    contadorL.innerText = sumaL;
    bandera = 1;
    historial.push(puntos)
    console.log(historial)
}
function incrementV(puntos){
    sumaV += puntos;
    contadorV.innerText = sumaV;
    bandera = 0;
    historial.push(puntos)
    console.log(historial)
}

function newgame(){
    sumaL = 0;
    sumaV = 0;
    contadorV.innerText = sumaL;
    contadorL.innerText = sumaV;
}
function undo(){
    
}