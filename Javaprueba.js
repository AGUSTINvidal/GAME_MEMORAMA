//Declaracion de una variable constante que contiene una lista de elementos del documento
const cards = document.querySelectorAll('.memory-card');
//Declaracion de variables locales con bloqueo(block scope)
let hasFlippedCard = false;
let bloquearTablero = false;
let firstCard, secondCard;
//Se crea el tablero con las casrtas y permite poder interactuar con este 
function flipCard(){
  if(bloquearTablero) return;
  if(this === firstCard) return;
  this.classList.toggle('flip');

  if(!hasFlippedCard){
//Primer Click
  hasFlippedCard = true;
  firstCard = this;

  return;
}
//Segundo Click
  secondCard = this;

  busquedaPares();
}

function busquedaPares(){
//Las cartas coinciden?

  let esPar = firstCard.dataset.framework===secondCard.dataset.framework;
  esPar ? deshabilitarCartas() : voltearCarta();

}
//si es par se activira un mensaje de los siguientes case el mensaje depende de la segunda carta elegida 
function deshabilitarCartas(){
  firstCard.removeEventListener('click',flipCard);
  secondCard.removeEventListener('click',flipCard);
  let advert = Math.floor(Math.random()*12);
  switch (advert) {
      case 0:
          swal('Dato interesante',
              'Mexicali, la ciudad que capturo al sol (slogan de la ciudad dado a sus temperaturas extremas, ' +
              'sobre todo en verano, alcanzando los 55 grados centigrados), protagonista de este aporte se ' +
              'encuentra en Baja California (asi es, Baja California Norte no existe, es Baja California a secas).',
              'success'
          )
          break;
      case 1:
          swal(
              'Dato interesante',
              ' La comida tipica de Mexicali se compone principalmente de 2 platillos: los tacos de carne asada' +
              ' (no puede decir que visito Mexicali si no fue a un puesto de tacos de carne asada) y la comida ' +
              'china (que mas que china es chino-mexicana, es muy buena y es unica no solo en Mexico, si no en ' +
              'el mundo). Ademas de estos platillos los hot dogs de Mexicali o jochos son bastante diferentes a ' +
              'los de otras partes de Mexico, tambien hay una oleada de restaurantes japoneses que ofrecen sushi-bolas ' +
              'que no se encuentran comúnmente en el centro y sur del pais.',
              'success'
          )
          break;
      case 2:
          swal(
              'Dato interesante',
              'La Administracion Publica Municipal es responsable de otorgar los servicios publicos y ' +
              'administrar los recursos con que contamos en el Municipio de Mexicali, para tal fin cuenta con 12 ' +
              'dependencias que tienen la gestion de: la policia y transito, recoleccion de basura, mantenimiento ' +
              'de vialidades, bomberos, entre otros.',
              'success'
          )
          break;
      case 3:
          swal(
              'Dato interesante',
              'Comisiones Permanentes Son las encargadas de aspectos especificos del gobierno, como educacion y hacienda. Se forman ' +
              'con los Regidores para ser una unidad especializada que busca la mejor manera de establecer ' +
              'lineas de accion ante una problematica municipal mediante convenios.',
              'success'
          )
          break;
      case 4:
          swal(
              'Dato interesante',
              'Comisiones Permanentes Son las encargadas de aspectos especificos del gobierno, como educacion y hacienda. Se forman ' +
              'con los Regidores para ser una unidad especializada que busca la mejor manera de establecer ' +
              'lineas de accion ante una problematica municipal mediante convenios.',
              'success'
          )
          break;
      case 5:
          swal(
              'Dato interesante',
              'El nacimiento de Baja California como Entidad Federativa ocurriria despues de poco mas de dos ' +
              'decadas de lucha; en efecto el 15 de Noviembre de 1951, el Presidente de la Republica Miguel ' +
              'Aleman Valdez, presento la iniciativa al H. Congreso del Estado de la Union para reformar los ' +
              'articulos 43 y 45 de la Constitucion Politica de los Estado Unidos Mexicano',
              'success'
          )
          break;
      case 6:
          swal(
              'Dato interesante',
              'Con Fecha 16 de Enero de 1952, se publico en el Diario Oficial de la Federacion el Decreto que ' +
              'reformo los articulos 43 y 45 de la Constitucion Politica de los Estados Unidos Mexicanos, que ' +
              'dio a conocer a las partes integrantes de la Federacion, incluyendo al Estado de Baja California ' +
              'y, por tanto es el inicio de la vida libre y soberana de nuestra entidad.',
              'success'
          )
          break;
      case 7:
          swal(
              'Dato interesante',
              'Desde 1823 hasta 1952, Baja California fue un territorio sujeto a los poderes centrales, su ' +
              'organizacion politica fue evolucionando a la medida de sus necesidades.',
              'success'
          )
          break;
      case 8:
          swal(
              'Dato interesante',
              'Con la separacion de la Alta California tras la guerra con Estados Unidos, el 25 de abril de ' +
              '1850 el Territorio de la Baja California se dividio en dos Partidos, el Norte y el Sur, bajo el ' +
              'mando de un Jefe Politico nombrado por el supremo gobierno. ',
              'success'
          )
          break;
      case 9:
          swal(
              'Dato interesante',
              'En 1930 un grupo de bajacalifornianos que estudiaban en la Cd. de Mexico sugiere al Poder ' +
              'Legislativo, el cambio politico de toda la peninsula, ya que por separado ninguno de los dos ' +
              'Distritos llenaban los requisitos para convertirse en Estado.',
              'success'
          )
          break;
      case 10:
          swal(
              'Dato interesante',
              '1939.- Se forma en Tijuana el Partido Pro Estado libre con Guillermo Medina Amor, Rafael ' +
              'Quijano, Manuel Acosta Meza, Antonio Morales Tamborrel y Alberto Amador.',
              'success'
          )
          break;
      case 11:
          swal(
              'Dato interesante',
              '25 de Octubre de 1953 - Se llevan a cabo las elecciones de Gobernador y 1a. Legislatura en el ' +
              'Estado, primeras elecciones en Mexico en que votan las mujeres. Los candidatos a gobernador ' +
              'participantes fueron Dr. Francisco C. Lizarraga por el PAN, Braulio Maldonado por el PRI y ' +
              'Maurilio Vargas por el FPP; resultando ganadores, tanto en la gubernatura como en las diputaciones, ' +
              'los candidatos del PRI. Cabe decir que por la reforma constitucional de 1953, la L.E. Aurora Jimenez de ' +
              'Palacios, es la primera mujer por Baja California al Congreso de la Union.',
              'success'
          )
          break;
  }

  reestablecerTablero();
}
//voltear la carta 
function voltearCarta(){
  bloquearTablero=true;

setTimeout(()=>{
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');

  reestablecerTablero();
},1000);
}

function reestablecerTablero(){
  [hasFlippedCard, bloquearTablero] = [false, false];
  [firstCard, secondCard] = [null, null];7
}
//Declaracion del array 
(function shuffle(){
  cards.forEach(card =>{
  let posicionesRandom = Math.floor(Math.random()*12);
  card.style.order = posicionesRandom;
});
})();

  cards.forEach(card => card.addEventListener('click',flipCard));

function reiniciar(){
  location.reload();
}
//vidal