var personajes =[{name:"Chapulin Colorado", hombre:"si", mascara:"no", arma:"si", poderes:"si", mujer:"no", vuela:"no"},
                  {name:"El Santo", hombre:"si", mascara:"si", arma:"no", poderes:"no", mujer:"no", vuela:"no"},
                  {name:"Mama Lucha", hombre:"no", mascara:"si", arma:"no", poderes:"no", mujer:"si", vuela:"no"},
                  {name:"Quetzalcoatl", hombre:"si", mascara:"no", arma:"si", poderes:"si", mujer:"no", vuela:"si"},
                  {name: "El Zorro", hombre:"si", mascara:"si", arma:"si", poderes:"no", mujer:"no", vuela:"no"},
                  {name:"Kaliman", hombre:"si", mascara:"no",arma:"no", poderes:"si", mujer:"no", vuela:"no"},
                  {name:"El Gato Negro", hombre:"si", mascara:"si", arma:"no", poderes:"no", mujer:"no", vuela:"no"},
                  {name:"Zooman", hombre:"si", mascara:"si", arma:"no", poderes:"si", mujer:"no",vuela:"si"}];

  var questions = ["¿Tu personaje es hombre?", "¿Tu personaje tiene mascara?","¿Tu personaje tiene arma?","¿Tu personaje tiene poderes?",
                                    "¿Tu personaje vuela?", "Tu personaje es el Chapulin Colorado", "Tu personaje es El Santo","Tu personaje es Mama Lucha",
                                  "Tu personaje es Quetzalcoatl", "Tu personaje es El Zorro", "Tu personaje es Kaliman", "Tu personaje es El Gato Negro",
                                "Tu personaje es Zooman"];

var candidatos=personajes;

const startButton = document.getElementById("inicio-btn");
const jugarButton = document.getElementById('jugar-btn');
const instruccionesButton = document.getElementById('instrucciones-btn');
const siguienteButton = document.getElementById('siguiente-btn');
const questionContainerElement = document.getElementById('question-container')
const bienvenidaElement = document.getElementById('bienvenida');
const instruccionesElement = document.getElementById('instrucciones');
const juegoElement = document.getElementById('juego');
const juegoFinalElement = document.getElementById('juegoFinal');
startButton.addEventListener("click", inicioScreen);
instruccionesButton.addEventListener("click", instruccionesScreen);
jugarButton.addEventListener("click", startGame);
siguienteButton.addEventListener("click", finalGame);


function inicioScreen(){
  startButton.classList.add('hide');
  bienvenidaElement.classList.remove('hide');
  instruccionesButton.classList.remove('hide');


}

function instruccionesScreen(){
    document.getElementById('saludo').innerHTML="Hola " + document.getElementById('nombre').value;
    bienvenidaElement.classList.add('hide');
    instruccionesButton.classList.add('hide');
    juegoFinalElement.classList.add('hide');
    instruccionesElement.classList.remove('hide');
    generateCharacter();
    if(x==1){
    jugarButton.classList.remove('hide');
  }else{
    siguienteButton.classList.remove('hide');
  }

}

function generateCharacter(){
x = Math.round(Math.random()*2)+1;
ran = Math.floor(Math.random()* 8);
return candidatos = personajes[ran];
}

function startGame(opcion){
generateCharacter();
preguntas(opcion,candidatos);
jugarButton.classList.add('hide');
instruccionesElement.classList.add('hide');
juegoElement.classList.remove('hide');
siguienteButton.classList.remove('hide');
}

function finalGame(){
  instruccionesElement.classList.add('hide');
  siguienteButton.classList.add('hide');
  juegoElement.classList.add('hide');
  juegoFinalElement.classList.remove('hide');
  finalGameProcess();
}

function finalGameProcess(){
  var firstquestion =confirm("¿Tu personaje es hombre?");

  if(firstquestion==true){
    //El personaje si es hombre
    var secondquestion=confirm("¿Tu personaje tiene mascara");
    if (secondquestion==true){
      var thirdpowerquestion = confirm("¿Tu personaje tiene poderes?");
      if (thirdpowerquestion==true){
        var zoomanquestion=confirm("¿Tu personaje es Zooman?");
        if (zoomanquestion==true){
          var zoomanplayagain=confirm("Wow gane, jugamos de nuevo?");
          if (zoomanplayagain==true){
            instruccionesScreen();
          }else{
            alert("Gracias por jugar");
          }
        }else{
          var failzooman=confirm("Falle, jugamos de nuevo?");
          if(failzooman==true){
            instruccionesScreen();
          }else{
            alert("Gracias por jugar");
          }
        }
      }else{
        var fourthweaponquestion=confirm("¿Tu personaje tiene algun arma?");
        if(fourthweaponquestion==true){
          var zorroquestion=confirm("¿Tu personaje es el zorro?");
          if (zorroquestion==true){
            var zorroplayagain=confirm("Wow gane, quieres jugar de nuevo?");
            if(zorroplayagain==true){
              instruccionesScreen();
            }else{
              alert("Gracias por jugar");
            }
          }else{
            var failzorro=confirm("Rayos! Pense que si, quiers jugar de nuevo?");
            if(failzorro==true){
              instruccionesScreen();
            }else{
              alert("Gracias por jugar");
            }
          }
        }else{
          var santoquestion=confirm("¿Tu personaje es el Santo?");
          if(santoquestion==true){
            var santoplayagain=confirm("Wow! Gane, quieres jugar de nuevo");
            if (santoplayagain==true){
              instruccionesScreen();
            }else{
              alert("Muchas gracias por jugar");
            }
          }else{
            var gatonegroquestion=confirm("Mmmm, entonces es GATO NEGRO!");
            if(gatonegroquestion==true){
              var gatoplayagain=confirm("Lo sabia! ¿Jugamos de nuevo");
              if(gatoplayagain==true){
                instruccionesScreen();
              }else{
                alert("Gracias por jugar");
              }
            }else{
              var failgato=confirm("Rayos! me ganaste, jugamos de nuevo?");
              if(failgato==true){
                instruccionesScreen();
              }else{
                alert("Gracias por jugar");
              }
            }
          }
        }
      }
    }else{
      var thirdweaponquestion=confirm("¿Tu personaje tiene alguna arma?");
      if (thirdweaponquestion==true){
        var fourthpowerquestion = confirm("¿Tu personaje tiene poderes?");
        if (fourthpowerquestion==true){
          var quetzalquestion=confirm("¿Tu personaje es Quetzalcoatl?");
          if (quetzalquestion==true){
            var quetzalplayagain=confirm("Gane! Quieres jugar de nuevo?");
            if (quetzalplayagain==true){
              instruccionesScreen();
            }else{
              alert("Gracias por jugar");
            }
          }else{
            var failquetzal=confirm("Falle, jugamos de nuevo?");
            if (failquetzal==true){
              instruccionesScreen();
            }else{
              alert("Gracias por jugar");
            }
          }
        }else{
          var chapulinquestion=confirm("¿Tu personaje es chapulin?");
          if(chapulinquestion==true){
            var chapulinplayagain=confirm("Gane, quieres jugar de nuevo?")
            if (chapulinplayagain==true){
              instruccionesScreen();
            }else{
              alert("Gracias por jugar");
            }
          }else{
            var failchapulin=confirm("Falle, jugamos de nuevo?");
            if(failchapulin==true){
              instruccionesScreen();
            }else{
              alert("Gracias por jugar");
            }
          }
        }
      }else{
        var kalimanquestion=confirm("Tu personaje es Kaliman?");
        if (kalimanquestion==true){
          var kalimanplayagain=confirm("Gane! Quieres jugar de nuevo?");
          if (kalimanplayagain==true){
            instruccionesScreen();
          }else{
            alert("Gracias por jugar");
          }
        }
      }
    }
  }else{
    var mamalucha=confirm("¿Tu personaje es mama lucha?");
    if(mamalucha==true){
      var mamaplaygain=confirm("Wow, eso fue rapido, jugamos de nuevo?");
      if (mamaplaygain==true){
        instruccionesScreen();
      }else{
        alert("Gracias por jugar");
      }
    }else{
      var failmama=confirm("Mmm, no lo se rick. Jugamos de nuevo?");
      if(failmama==true){
        instruccionesScreen();
      }else{
        alert("Gracias por jugar");
      }
    }
  }
}





function preguntas(questions, candidatos){
        flag=0;
        switch(questions){
          case 0:
          if(candidatos.hombre=="si"){
            document.getElementById("salida").innerHTML ="El personaje si es un hombre";
          }else{
            document.getElementById("salida").innerHTML ="El personaje no es un hombre";
          }
          break;
          case 1:
          if(candidatos.mascara=="si"){
            document.getElementById("salida").innerHTML ="El personaje si tiene una mascara";
          }else{
            document.getElementById("salida").innerHTML ="El personaje no tiene una mascara";
          }
          break;

          case 2:
          if(candidatos.arma=="si"){
            document.getElementById("salida").innerHTML ="El personaje si porta algun tipo de arma";
          }else{
            document.getElementById("salida").innerHTML ="El personaje no porta algun tipo de arma";
          }
          break;

          case 3:
          if(candidatos.poderes=="si"){
            document.getElementById("salida").innerHTML ="El personaje si tiene poderes";
          }else{
            document.getElementById("salida").innerHTML ="El personaje no tiene poderes";
          }
          break;

          case 4:
          if(candidatos.mujer=="si"){
            document.getElementById("salida").innerHTML ="El personaje si es una mujer";
          }else{
            document.getElementById("salida").innerHTML ="El personaje no es una mujer";
          }
          break;

          case 5:
          if(candidatos.vuela=="si"){
          document.getElementById("salida").innerHTML ="El personaje si vuela";
          }else{
            document.getElementById("salida").innerHTML ="El personaje no vuela";
          }
          break;

          case 6:
          if(candidatos.name=="Chapulin Colorado"){
            document.getElementById("salida").innerHTML ="WOW! El personaje si es Chapulin Colorado, ganaste! Ahora es mi turno, dale click en Siguiente";
            flag = 1;
          }else{
            document.getElementById("salida").innerHTML ="Rayos! El personaje no es Chapulin Colorado.";
          }
          break;

          case 7:
          if(candidatos.name=="El Santo"){
            document.getElementById("salida").innerHTML ="WOW! El personaje si es El Santo, ganaste! Ahora es mi turno, dale click en Siguiente";
            flag = 1;
          }else{
            document.getElementById("salida").innerHTML ="Rayos! El personaje no es El Santo.";
          }
          break;

          case 8:
          if(candidatos.name=="Mama Lucha"){
            document.getElementById("salida").innerHTML ="WOW! El personaje si es Mama Lucha, ganaste! Ahora es mi turno, dale click en Siguiente";
            flag = 1;
          }else{
            document.getElementById("salida").innerHTML ="Rayos! El personaje no es Mama Lucha.";
          }
          break;
          case 9:
          if(candidatos.name=="Quetzalcoatl"){
            document.getElementById("salida").innerHTML ="WOW! El personaje si es Quetzalcoatl, ganaste! Ahora es mi turno, dale click en Siguiente";
            flag = 1;
          }else{
            document.getElementById("salida").innerHTML ="Rayos! El personaje no es Quetzalcoatl.";
          }
          break;

          case 10:
          if(candidatos.name=="El Zorro"){
            document.getElementById("salida").innerHTML ="WOW! El personaje si es El Zorro, ganaste! Ahora es mi turno, dale click en Siguiente";
            flag = 1;
          }else{
          document.getElementById("salida").innerHTML ="Rayos! El personaje no es El Zorro.";
          }
          break;

          case 11:
          if(candidatos.name=="Kaliman"){
            document.getElementById("salida").innerHTML ="WOW! El personaje si es Kaliman, ganaste! Ahora es mi turno, dale click en Siguiente";
            flag = 1;
          }else{
            document.getElementById("salida").innerHTML ="Rayos! El personaje no es Kaliman.";
          }
          break;

          case 12:
          if(candidatos.name=="El Gato Negro"){
            document.getElementById("salida").innerHTML ="WOW! El personaje si es El Gato Negro, ganaste! Ahora es mi turno, dale click en Siguiente";
            flag = 1;
          }else{
            document.getElementById("salida").innerHTML ="Rayos! El personaje no es El Gato Negro.";
          }
          break;

          case 13:
          if(candidatos.name=="Zooman"){
            document.getElementById("salida").innerHTML ="WOW! El personaje si es Zooman, ganaste! Ahora es mi turno, dale click en Siguiente";
            flag = 1;
          }else{
            document.getElementById("salida").innerHTML ="Rayos! El personaje no es Zooman.";
          }
          break;
          default:
          break;
        }

}
