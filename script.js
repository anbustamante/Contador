let contadorL = document.getElementById("plocal");
let sumaL = 0;
let contadorV = document.getElementById("pvis");
let sumaV = 0;
let historialBandera = [];
let historial = [];

function incrementL(puntos){
    sumaL += puntos;
    contadorL.innerText = sumaL;
    historialBandera.push(1)
    historial.push(puntos);
    console.log(historialBandera.length)
}
function incrementV(puntos){
    sumaV += puntos;
    contadorV.innerText = sumaV;
    historialBandera.push(0);
    historial.push(puntos);
    console.log(historialBandera.length)
}

function newgame(){
    sumaL = 0;
    sumaV = 0;
    historialBandera = [];
    historial = [];
    contadorV.innerText = sumaL;
    contadorL.innerText = sumaV;
}
function undo(){
    if ((historialBandera[historialBandera.length - 1]) === 1){
        sumaL -= historial[historial.length -1];
        historialBandera.pop();
        historial.pop();
        contadorL.innerText = sumaL;
    } else if((historialBandera[historialBandera.length - 1])=== 0){
        sumaV -= historial[historial.length -1];
        historialBandera.pop();
        historial.pop();
        contadorV.innerText = sumaV;
    }
}