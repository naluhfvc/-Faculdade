//1. Faça um programa que preencha por leitura um vetor de 10 posições, e conta quantos valores diferentes existem no vetor.

/*var vetor = new Array();
var diferentes = 0;

for (var i = 0; i < 10; i++) {
    vetor[i] = Number(prompt('Insira um valor: '));
    var igual = false;
    for (var j = 0; j < i; j++) {
        if(vetor[i] == vetor[j]){
            igual = true;
        }
    }

    if(igual == false){
        diferentes ++;
    }
}

console.log(vetor);

document.write(`Tem ${diferentes} números diferentes.`);
*/

//2. Crie um programa que leia quatro valores pelo teclado e guarde-os em um vetor. No final mostre:
//a) Quantas vezes apareceu o valor 9. b) Em que posição foi digitado o primeiro valor 3. c) Quais foram os números pares.
/*
var vet=[]
var cont=0;
for(var i=0;i<4;i++){
    vet[i]=Number(prompt('Elemento do vet: '))
    if(vet[i]==9)
        cont++;
    if(vet[i]%2==0)
        document.write('<br>ELemento Par: ',vet[i])
}
	
console.log('Quantidade de 9s no vetor',cont)
console.log(`Primeiro valor 3 : ${vet.indexOf(3)}`)
*/

//3. Um dado é lançado 50 vezes, e o valor correspondente é armazenado em um vetor. Faça um programa que determine o percentual de ocorrências de face 6 do dado dentre esses 50 lançamentos.

/*var valoresDado = new Array();
var vezes = 0;

for(var i = 0; i < 50; i++){
    valoresDado[i] = Number(prompt('Insira o valor do dado: '));
    if(valoresDado[i] == 6){
        vezes++;
    }
}

var percentual = vezes / 50 * 100;

document.write(`Percentual de ocorrencias da face 6: ${percentual}%.`);
*/

//4. Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.

/*var vetor = new Array();

for(var i = 0; i < 5; i++){
    vetor[i] = Number(prompt('Insira o valor: '));
}

var soma = 0;
var multiplicação = 1;

for( var i = 0; i < 5; i++){
    soma += vetor[i];
    multiplicação *= vetor[i];
}


document.write('A soma dos numeros: ' + soma + '<br>');
document.write('A multiplicacao dos numeros: ' + multiplicação + '<br>');
document.write('Numeros: ' + vetor.toString());
*/

//5. Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.

/*var idade = new Array();
var altura = new Array();
var x = 3;

for(var i = 0; i < x ; i++){
    idade[i] = Number(prompt('Digite a idade:'));
    altura[i] = Number(prompt('Digite a altura:'));
}

document.write('Idades lidas ordem normal: ' + idade);
document.write('<br>Alturas lidas ordem normal: ' + altura);
document.write('<br>Idades lidas ordem inversa: ' + idade.reverse());
document.write('<br>Alturas lidas ordem inversa: ' + altura.reverse());*/

// 6. Utilizando um vetor, faça um programa que faça 5 perguntas para uma pessoa
// sobre um crime. As perguntas são:
// a) "Telefonou para a vítima?"
// b) "Esteve no local do crime?"
// c) "Mora perto da vítima?"
// d) "Devia para a vítima?"
// e) "Já trabalhou com a vítima?"

// O programa deve no final emitir uma classificação sobre a participação da pessoa
// no crime. Se a pessoa responder positivamente a 2 questões ela deve ser
// classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino".
// Caso contrário, ele será classificado como "Inocente".

/*var perguntas = new Array('Telefonou para a vítima?',
"Esteve no local do crime?",
"Mora perto da vítima?",
"Devia para a vítima?",
"Já trabalhou com a vítima?");

var respostas = new Array();
var cont = 0;
alert('RESPONDA COM SIM OU NAO!!');

for (var i = 0; i < perguntas.length; i++) {
    respostas[i] = prompt(perguntas[i]);
    if(respostas[i].toUpperCase() == 'SIM'){
        cont ++;
    }
}

if(cont == 2){
    alert('Suspeita.')
}else if(cont == 3 || cont == 4){
    alert('Cúmplice!');
}else if(cont == 5) {
    alert('ASSASSINO!!!');
}else {
    alert('Inocente');
}*/

/*7. Faça um programa que simule um lançamento de dados. Lance o dado 10 vezes e armazene os resultados em um vetor. Depois, monte um outro vetor contendo quantas vezes cada valor foi obtido. Imprima os dois vetores. Use uma função para gerar números aleatórios, simulando os lançamentos dos dados.
Exemplo de uma possível saída:
[3, 1, 5, 3, 5, 4, 5, 5, 3, 6]
[1, 0, 3, 1, 4, 1]*/

/*function gerarNumeros () {
    return parseInt(Math.random() * 6 + 1);
}

function contarQtdValores(valor) {
    if(valor == 1){
        vezesDosValores[0]++;
    }else if(valor == 2){
        vezesDosValores[1] ++;
    }else if(valor == 3){
        vezesDosValores[2]++;
    }else if(valor== 4) {
        vezesDosValores[3]++;
    }else if(valor == 5){
        vezesDosValores[4]++;
    }else if(valor == 6){
        vezesDosValores[5]++;
    }
}

let dadoValores = new Array();
let vezesDosValores = new Array(0,0,0,0,0,0);

for (var i = 0; i < 10; i++) {
    dadoValores[i] = gerarNumeros();
}

for(var i = 0; i < 10; i++){
    contarQtdValores(dadoValores[i]);
}

document.write("Valores dos dados : " + dadoValores + "<br>");
document.write("Qtd de vezes que cada valor foi obtido: " + vezesDosValores);*/

/*8. Faça um programa que percorre um vetor e imprime na tela o valor mais próximo da média dos valores do vetor.
Exemplo: 
vetor = [2.5, 7.5, 10.0, 4.0]
(média = 6.0)
Valor mais próximo da média = 7.5*/

/*function calcularDiferenca(valor, media){
    if(valor <= media){
        if(media - valor < menorDiferenca){
            menorDiferenca = media - valor;
            valorMaisProx = valor;
        }
    }else if(valor > media){
        if(valor - media < menorDiferenca){
            menorDiferenca = valor - media;
            valorMaisProx = valor;
        }
    }
}

let vetor = new Array();
let soma = 0;

//le
for(let i = 0; i < 5; i++){
    vetor[i] = Number(prompt('Insira um valor pra posição['+i+']:'));
}

for(let i = 0; i < vetor.length; i++){
    soma += vetor[i];
}

let media = soma / vetor.length;
let menorDiferenca = 99999;
let valorMaisProx;

for(let i = 0; i < vetor.length; i++){
    calcularDiferenca(vetor[i],media); //calcula a diferenca do valor pra media e guarda o menor
}

document.write("vetor: " + vetor);
document.write('<br>Média: ' + media.toFixed(1));
document.write('<br>Número mais proximo da média: ' + valorMaisProx);*/