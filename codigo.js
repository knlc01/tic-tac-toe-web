let tabla_array = ["", "", "", "", "", "", "", "", ""];
let n = 0;

const celda0 = document.getElementById('celda-0');
const celda1 = document.getElementById('celda-1');
const celda2 = document.getElementById('celda-2');
const celda3 = document.getElementById('celda-3');
const celda4 = document.getElementById('celda-4');
const celda5 = document.getElementById('celda-5');
const celda6 = document.getElementById('celda-6');
const celda7 = document.getElementById('celda-7');
const celda8 = document.getElementById('celda-8');

const h1 = document.getElementById('mensajes');
const celdas = document.getElementsByClassName('celda');

//de aca tomo si el jugador eligio X ó O
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const jugador = urlParams.get('jugador')
console.log(jugador);
turno = jugador;
console.log("turno",turno);
    h1.innerText = "Turno de " + turno;

var turnos = urlParams.get('jugador');
console.log(turnos);

//funciones

var juego = document.querySelector(".tablero");
juego = addEventListener("click", agregar);

function agregar(event){
    
    //detecto que celda estoy tocando
    if(turno == "x"){

        console.log("hola1");
        var target = event.target;
        var dataset = target.dataset;
        var a = dataset.cell;
        var a2 = "celda-"+a;

        const cel = document.getElementById(a2);
        //cel.onclick = function(){
            console.log("hola1.1");
            cel.innerText = "X";
            tabla_array[a] = "X";
            console.log(tabla_array);
            h1.innerText = "Turno de O ";
            turno = "o";
            desabilita(a);
        //}
        compruebaGanador("X");

    }
    else if(turno == "o"){

        console.log("hola2");
        var target = event.target;
        var dataset = target.dataset;
        var a = dataset.cell;
        var a2 = "celda-"+a;
        const cel = document.getElementById(a2);
        //cel.onclick = function(){
            console.log("hola2.2");
            cel.innerText = "O";
            tabla_array[a] = "O";
            console.log(tabla_array);
            h1.innerText = "Turno de X";
            turno = "x";
            desabilita(a);
        //}  
        compruebaGanador("O");      
    }

}

function compruebaGanador(x){
    console.log("p")
    if(tabla_array[0] === tabla_array[1] && tabla_array[1] === tabla_array[2] && tabla_array[0] !== ""){
        /*
        alert("win",x);
        console.log("ganaste")
        */
        h1.innerText = "WIN! " + x;
        celda0.style.color = "rgb(0, 255, 0)";
        celda1.style.color = "rgb(0, 255, 0)";
        celda2.style.color = "rgb(0, 255, 0)";
        gano();
    }
    else if(tabla_array[3] === tabla_array[4] && tabla_array[4] === tabla_array[5] && tabla_array[3] !== ""){
        h1.innerText = "WIN! " + x;
        celda3.style.color = "rgb(0, 255, 0)";
        celda4.style.color = "rgb(0, 255, 0)";
        celda5.style.color = "rgb(0, 255, 0)";
        gano();
    }
    else if(tabla_array[6] === tabla_array[7] && tabla_array[7] === tabla_array[8] && tabla_array[6] !== ""){
        h1.innerText = "WIN! " + x;
        celda6.style.color = "rgb(0, 255, 0)";
        celda7.style.color = "rgb(0, 255, 0)";
        celda8.style.color = "rgb(0, 255, 0)";
        gano();
    }

    else if(tabla_array[0] === tabla_array[3] && tabla_array[3] === tabla_array[6] && tabla_array[0] !== ""){
        h1.innerText = "WIN! " + x;
        celda0.style.color = "rgb(0, 255, 0)";
        celda3.style.color = "rgb(0, 255, 0)";
        celda6.style.color = "rgb(0, 255, 0)";
        gano();
    }
    else if(tabla_array[1] === tabla_array[4] && tabla_array[4] === tabla_array[7] && tabla_array[1] !== ""){
        h1.innerText = "WIN! " + x;
        celda1.style.color = "rgb(0, 255, 0)";
        celda4.style.color = "rgb(0, 255, 0)";
        celda7.style.color = "rgb(0, 255, 0)";
        gano();
    }
    else if(tabla_array[2] === tabla_array[5] && tabla_array[5] === tabla_array[8] && tabla_array[2] !== ""){
        h1.innerText = "WIN! " + x;
        celda2.style.color = "rgb(0, 255, 0)";
        celda5.style.color = "rgb(0, 255, 0)";
        celda8.style.color = "rgb(0, 255, 0)";
        gano();
    }

    else if(tabla_array[0] === tabla_array[4] && tabla_array[4] === tabla_array[8] && tabla_array[0] !== ""){
        h1.innerText = "WIN! " + x;
        celda0.style.color = "rgb(0, 255, 0)";
        celda4.style.color = "rgb(0, 255, 0)";
        celda8.style.color = "rgb(0, 255, 0)";
        gano();
    }
    else if(tabla_array[2] === tabla_array[4] && tabla_array[4] === tabla_array[6] && tabla_array[2] !== ""){
        h1.innerText = "WIN! " + x;
        celda2.style.color = "rgb(0, 255, 0)";
        celda4.style.color = "rgb(0, 255, 0)";
        celda6.style.color = "rgb(0, 255, 0)";
        gano();
    }
}

function gano(){
    /*
    celda0.innerText = "";
    celda1.innerText = "";
    celda2.innerText = "";
    celda3.innerText = "";
    celda4.innerText = "";
    celda5.innerText = "";
    celda6.innerText = "";
    celda7.innerText = "";
    celda8.innerText = "";
*/
    celda0.style.pointerEvents = 'none';
    celda1.style.pointerEvents = 'none';
    celda2.style.pointerEvents = 'none';
    celda3.style.pointerEvents = 'none';
    celda4.style.pointerEvents = 'none';
    celda5.style.pointerEvents = 'none';
    celda6.style.pointerEvents = 'none';
    celda7.style.pointerEvents = 'none';
    celda8.style.pointerEvents = 'none';
/*    document.getElementsByClassName("celda").onclick = function(){
    document.getElementById('tablero').onclick = function () {
        this.onclick = false;
    }
*/
}

function desabilita(num){
    if(num == 0){
        celda0.style.pointerEvents = 'none';
    }
    else if(num == 1){
        celda1.style.pointerEvents = 'none';
    }
    else if(num == 2){
        celda2.style.pointerEvents = 'none';
    }
    else if(num == 3){
        celda3.style.pointerEvents = 'none';
    }
    else if(num == 4){
        celda4.style.pointerEvents = 'none';
    }
    else if(num == 5){
        celda5.style.pointerEvents = 'none';
    }
    else if(num == 6){
        celda6.style.pointerEvents = 'none';
    }
    else if(num == 7){
        celda7.style.pointerEvents = 'none';
    }
    else if(num == 8){
        celda8.style.pointerEvents = 'none';
    }    
}
