//1.Imprimir os números ímpares menores que 100 

/*for(var i = 1; i < 100; i++){
    if(i % 2 != 0){
        document.write('<br>' + i);
    }
} 
*/

//2.Imprimir todas as tabuadas do número 1 ao 10

/*for(var i = 1; i <= 10; i++){

    for(var j = 1; j <= 10; j++){
        document.write('<br>' + i + ' x ' + j + ' = ' + i * j);
    }
    document.write('<br>');
}
*/

//3.Criar uma função para calcular a porcentagem de um número

/*var resultado; 

 var n = Number(prompt('Insira o valor: '));
 var p = Number(prompt('Insira a porcentagem: '));

function porcentagem (numero, porcentagem){
    resultado = (numero * porcentagem) / 100;
    alert('%= ' + resultado);
}
porcentagem(n, p);
*/

//4.Criar uma função que converta uma temperatura de Celsius para Fahrenheit  

/*var celsius = Number(prompt('Digite a temperatura em Celsius: '));

function converteTemperatura(c){
    var Fahrenheit = c * 1.8 + 32;
    alert('ºF = ' + Fahrenheit);
}

converteTemperatura(celsius);
*/

//5.Criar uma função para imprimir os 10 primeiros números da sequência de Fibonacci usando recursividade

/*function Fibonacci(){
    var penultima = 0;
    var ultima = 1;
    var resultado = 0;
    
    for(var i = 0; i < 10; i++){
        if(resultado == 0 || resultado == 1){
            document.write('<br>' + resultado);
            resultado++;
        }
        resultado = penultima + ultima;
        document.write('<br>' + resultado);
        penultima = ultima;
        ultima = resultado;
    }
}

Fibonacci();
*/

//6.Crie uma função que calcule a raiz quadrada de um número e retorne um número inteiro como resultado 

/*function calcularRaiz (numero){
    var resultado = Math.trunc(Math.sqrt(numero));
    document.write('A raiz quadrada de ' + numero + ' é ' + resultado);
}

var n = Number(prompt('Insira um numero:'));

calcularRaiz(n);
*/

//7.Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 

/*function retorneMaior(x, y){
    if(x > y){
        alert('O primeiro numero é maior');
    }else if(x == y){
        alert('O primeiro numero é igual ao segundo');
    }else {
        alert('O segundo é maior que o primeiro.');
    }
}

var numero1 = Number(prompt('Digite o primeiro numero:'));
var numero2 = Number(prompt('Digite o segundo numero: '));

retorneMaior(numero1, numero2);
*/

//8.Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

/*var nome = prompt('Insira o nome de usuario: ');
var senha;

do {
    senha = prompt('Insira a senha: ');
    if(senha == nome){
        alert('Senha igual ao nome de usuário. Digite outra senha!');
    }
} while (senha == nome);

alert('Concluído');*/

//9.Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.

/*var N = Number(prompt('Digite o valor N: '));

function calcularPrimos(N) {

    for (var i = 2; i < N; i++) { // navega entre o 1 e N
        if (i == 2) {
            document.write(`${i} é primo e foram executadas 0 divisões.<br>`);

        } else if (i % 2 == 0) {
            document.write(`${i} não é primo e foi executada 1 divisão.<br>`);

        } else {
            var contador = 0;
            var primo = true;
            for (var j = 3; j < i; j++) {
                contador++;
                if (i % j == 0) {
                    primo = false;
                }
            }
            if (primo) {
                document.write(`${i} é primo e foram executadas ${contador} divisões.<br>`);
            } else {
                document.write(`${i} não é primo e foram executadas ${contador} divisões.<br>`);
            }
        }
    }
}

calcularPrimos(N);
*/

// 10.Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
// • Esse funcionário foi contratado em 2019, com salário inicial de R$1000,00;
// • Em 2020 recebeu aumento de 1,5% sobre seu salário inicial;
// • A partir de 2021 (inclusive), os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior
// Faça um programa que determine o salário atual deste funcionário.


 function calcularSalario(salarioInicial){
    var salario = salarioInicial * 1.015;//2020
    salario = salario * 1.06; // 2022
    return document.write ('Salário atual = R$' + salario.toFixed(2));
}

calcularSalario(1000.0);
