//1. Crie uma função que recebe um array de 3 números e coloque-os em ordem crescente. Crie sua própria função para isso.

/*function ordenar(vet) {
    let aux;
    for (let i = 0; i < vet.length; i++) {
        if(vet[2] < vet[1] && vet[2] < vet[0]){
            aux = vet[0];
            vet[0] = vet[2];
            vet[2] = aux;
            if(vet[1] > vet[2]){
                aux = vet[2];
                vet[2] = vet[1];
                vet[1] = aux;
            }
        }else if(vet[1] < vet[2] && vet[1] < vet[0]){
            aux = vet[0];
            vet[0] = vet[1];
            vet[1] = aux;
            if(vet[1] > vet[2]){
                aux = vet[2];
                vet[2] = vet[1];
                vet[1] = aux;
            }
        }else{
            if(vet[1] > vet[2]){
                aux = vet[2];
                vet[2] = vet[1];
                vet[1] = aux;
            }
        }
    }
    return vet;
}

let numeros = new Array();

for(i = 0; i < 3; i++){
    numeros[i] = Number(prompt("Insira um numero:"));
}

console.log(ordenar(numeros));*/

/*2. Crie uma função que receba um vetor e um número. Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).*/

/*function buscaIndice (vetor, numero){
    document.write(`Indices em que o numero ${numero} aparece: <br>`);
    var achei = false;
    for(let i = 0; i < vetor.length; i++){
        if(numero == vetor[i]){
            document.write("<br>[" + i + "]");
            achei = true;
        }
    }
    if(achei == false){
        document.write("Não encontrado.")
    }
}

let vetor = new Array();
for( i = 0; i < 6; i++){
    vetor[i] = Number(prompt("Insira um numero:"));
}
console.log(vetor);
let numero = Number(prompt("Insira o numero que deseja buscar:"));

buscaIndice(vetor, numero);*/

/*3. Criar uma função que receba como parâmetro um array de números e retorne um
array contendo somente números positivos. */

/*function positivos (array){
    let arrayPositivos = new Array();
    for(let i = 0, j = 0; i < array.length; i++){
        if(array[i] > 0){
            arrayPositivos[j] = array[i];
            j++;
        }
    }

    return arrayPositivos;
}

let vetor = new Array();

for(i = 0; i < 8; i++){
    vetor[i] = Number(prompt("Insira um numero para o indice " + i + ":"));
}
console.log(vetor);
document.write("Numeros positivos : " + positivos(vetor));*/

/*4. Localizar o maior valor dentro de um array de números. */

/*function encontrarMaior (array) {
    let maior = 0;
    array.forEach(element => {
        if(element > maior){
            maior = element;
        }
    });
    return maior;
}

let array = new Array();

for(let i = 0; i < 10; i++){
    array[i] = Number(prompt("Insira um valor para o indice [" + i+ "]:"));
}
console.log(array);
document.write("Maior valor do array é: " + encontrarMaior(array));*/

/*5. Retornar a maior string de um array. */

/*let array = new Array();

function maiorString(array) {
    let maior = '';
    array.forEach(element => {
        if (element.length > maior.length) {
            maior = element;
        }
    });
    return maior;
}

for (let i = 0; i < 5; i++) {
    array[i] = prompt("Insira uma string pro array:");
}
console.log(array);

document.write("A maior string do array é '" + maiorString(array) + "'.");*/

/* 6. Criar uma função que junte dois arrays e retorno o resultado como um novo array*/

/*function concatenar(array1, array2){
    let arrayNovo = new Array();
    let i = 0;
    array1.forEach(element => {
        arrayNovo[i] = element;
        i++;
    });
    array2.forEach(element => {
        arrayNovo[i] = element;
        i++;
    });
    return arrayNovo;
}

let array1 = new Array(2,5,1,10,4);
let array2 = new Array(8,91,90,23,12);

document.write("Array novo: " + concatenar(array1,array2));*/

/*7. Criar uma função para inverter um array */

/*function inverterArray (array){
    let arrayInvertido = new Array();
    let i = array.length - 1;
    array.forEach(element => {
        arrayInvertido[i] = element;
        i--;
    });
    return arrayInvertido;
}

let array = new Array(34, 12, 123, 'ana', 'javascript', 2.4);

console.log("Array invertido: " + inverterArray(array));*/