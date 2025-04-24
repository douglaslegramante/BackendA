//1. Crie um programa que declare duas variáveis e exiba o resultado da soma,
//subtração, multiplicação e divisão desses números.
let valor1 = 10
let valor2 = 2
let soma = valor1 + valor2
let subtracao = valor1 - valor2
let multiplicacao = valor1 * valor2
let divisao = valor1 / valor2
console.log(`
    ${valor1} + ${valor2} = ${soma} 
    ${valor1} / ${valor2} = ${divisao}
    ${valor1} - ${valor2} = ${subtracao}
    ${valor1} * ${valor2} = ${multiplicacao}
`)

//2. Declare duas idades e utilize operadores de comparação para verificar se uma
//pessoa é mais velha que a outra.
let idade1 = 22;
let idade2 = 15;

let resultado = idade1 < idade2 ? "o segundo e mais velho" : "o primeiro e mais velho"
console.log (resultado);

//3. Crie uma variável idade com um número e use o operador ternário para verificar
//se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de
//idade” ou “Menor de idade”.
let idade = 20;

let result = idade >= 18 ? "Maior de idade!" : "Menor de idade"
console.log(result);


//4. Crie uma variável com um número e use o operador ternário para verificar se é
//par ou ímpar.

let num = 3;

let resolucao = num % 2 == 0 ? "Par" : "Impar"
console.log(resolucao)