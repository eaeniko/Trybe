let nota = 85;
let name = 'Nikolai';


if (nota >= 80) {
  console.log('Parabéns ' + name + ' você foi aprovado.');
} else if (nota < 80 && nota >= 60) {
  console.log('Você ' + name + ' está na nossa lista de espera.');
} else if (nota < 60) {
  console.log('Você foi reprovado ' + name + '.');
} else {
  console.log('Digite uma nota valida de 1 a 100');
}

let candidato = 'aprovado';

switch (candidato) {
  case "aprovado":
    console.log("Aprovado!");
    break;
  case "lista":
    console.log("Lista de espera");
    break;
  case "reprovado":
    console.log("Reprovado");
    break;
  default:
    console.log("não se aplica");
}