const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
1Crie uma função que adicione a classe 'tech' ao elemento selecionado;
Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


2 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
3Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
. Que tal redirecionar para seu portifólio?
3 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

// function removeTech(event){
//   event.target.removeEventListener('click', event);
// }

function classTech(event) {
  console.log(event.target);
    event.target.className = 'tech';
}

divUm.addEventListener('click', classTech);
divDois.addEventListener('click', classTech);
divTres.addEventListener('click', classTech);

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.