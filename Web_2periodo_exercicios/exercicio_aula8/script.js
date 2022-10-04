//1. Iniciar a contagem de elementos de um vetor, começando no índice zero até o último índice (este vetor contém um total 5 índices)

/*let vet = new Array();

for(let i = 0; i<5; i++){
    vet[i] = Number(prompt('insira um valor:'));
}

document.write('O vetor tem ' + vet.length + ' elementos');*/

//2. Crie um algoritmo usando o for que leia uma lista. Mostre no console apenas os números pares. Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*let vetor = new Array(1,2,3,4,5,6,7,8,9);

vetor.forEach(element => {
    if(element % 2 == 0){
        console.log(element);
    }
});*/

//3. Criar uma função que junte dois arrays e retorno o resultado como um novo array

/*let vetor1 = new Array();
let vetor2 = new Array();

for(let i = 0; i < 5; i++){
    vetor1[i] = prompt('Insira um elemento no vetor 1:');
}

for(let i = 0; i < 5; i++){
    vetor2[i] = prompt('Insira um elemento no vetor 2:');
}

let vetor = vetor1.concat(vetor2).join(' - ');

document.write(vetor); */

//4. Crie uma função que calcule a raiz quadrada de um número e retorne um número inteiro como resultado

/*let resposta = document.querySelector('#resposta');

function calcularQuadrada () {
    let numero = document.querySelector(".numero").value;
    resposta.innerText = 'A raiz quadrada é ' + parseInt(Math.sqrt(numero));
}*/

//5. Faça um script que peça os 3 lados de um triângulo. O script deverá informar se
// os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se
// o mesmo é: equilátero, isósceles ou escaleno.
// Dicas:
// Três lados formam um triângulo quando a soma de quaisquer dois lados for
// maior que o terceiro;
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;

/*let resp = document.querySelector('#resp')

function verificarTriangulo (){
    let lado1 = document.querySelector('#lado1').value;
    let lado2 = document.querySelector('#lado2').value;
    let lado3 = document.querySelector('#lado3').value;

    if((lado1 + lado2) > lado3 || (lado1 + lado3) > lado2 || (lado2 + lado3) > lado1){
        if(lado1 === lado2 && lado2 === lado3 && lado1===lado3){
            resp.innerText = 'É um triângulo equilátero';
        }else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
            resp.innerText = 'É um triângulo Isósceles';
        }else{
            resp.innerText = 'É um triângulo Escaleno';
        }

    }else {
        resp.innerText = 'Não é um triângulo!'
    }
}*/

//6. Faça um script que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.


let resp = document.querySelector('#resp');

function verificarAno () {
    let ano = document.querySelector('#ano');
    if(ano % 4 == 0 && ano % 100 != 0){
        resp.innerText = 'É um ano bissexto';
    }else {
        resp.innerText = 'Não é um ano bissexto'
    }
}