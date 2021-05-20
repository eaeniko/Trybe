let angulo1 = 30;
let angulo2 = 50;
let angulo3 = 'a';

if (angulo1 + angulo2 + angulo3 == 180) {
  let resultado = true;
  console.log(resultado);
} else if (angulo1 + angulo2 + angulo3 < 180) {
  let resultado = false;
  console.log(resultado);
} else {
  console.log('Errors, check the angles numbers.');
}