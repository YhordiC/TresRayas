let j=0;
let turno=0;
let juegoplay=true;
let puedoEscribir=true;

document.querySelectorAll("button").forEach( obj=> obj.addEventListener("click",saludar));
let Contenedor= document.getElementsByClassName("container");
let Parafo= document.getElementById('parafo');
let Play= document.getElementById('Reset'); //
// contenedorBt.appendChild(BotonReset);
Play.addEventListener("click",resetearValor); 



function saludar(e) {
   let cont= e.target;
 if(juegoplay)
 {  if(cont.innerHTML.length===0){
      if(turno===0)
      {
        cont.innerHTML="X";
        cont.style.color="red";
        cont.style.fontSize="80px";
        cont.value="X";
   // let myTurnRojo= Generar('X');
  // cont.style.fontSize="100%";
        turno++;
   }
      else if(turno===1)
      {
        cont.innerHTML="O";
        cont.value="O";
        cont.style.color="blue";
        cont.style.fontSize="80px";

    // let miTurnoAzul= Generar('O');
   //  cont.style.fontSize="100%";
       turno=0;
   }
   //prueba(cont.innerText,cont.innerText);
  
      if(j>3)
      { prueba(Contenedor[0].value,Contenedor[1].value,Contenedor[2].value);
        prueba(Contenedor[0].value,Contenedor[4].value,Contenedor[8].value);
        prueba(Contenedor[0].value,Contenedor[3].value,Contenedor[6].value);
        prueba(Contenedor[3].value,Contenedor[4].value,Contenedor[5].value);
        prueba(Contenedor[6].value,Contenedor[7].value,Contenedor[8].value);
        prueba(Contenedor[6].value,Contenedor[4].value,Contenedor[2].value);
        prueba(Contenedor[2].value,Contenedor[5].value,Contenedor[8].value);
        prueba(Contenedor[1].value,Contenedor[4].value,Contenedor[7].value);}
   j++;
 }
  else{}
}
  if(j>8)
  {juegoplay=false;} 
}
//let  Generar = function(turn){if(turn==='X'){return 0;} if(turn==='Y'){return 1;}};
/* for(let i=0; i<contenedor.length; i++) {
    contenedor[i].addEventListener('click', saludar);
    j=i;
 } */


 function prueba(a,b,c){
    if(a===b&&c===a)
    {if(turno===1){ Parafo.innerHTML="Ganaste Jugador Rojo";}
      if(turno===0){ Parafo.innerHTML="Ganaste Jugador Azul";}
    juegoplay=false; }
 }

 function resetearValor(){ 
  for(var i=0; i<9;i++){ 
    Contenedor[i].innerHTML="";
    Contenedor[i].value=i;
  } 
  Parafo.innerHTML="";
  turno=0;
j=0;
juegoplay=true;}

 


   