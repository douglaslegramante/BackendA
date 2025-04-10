//Atividade 01
let nome = "Douglas";
let idade = 37;

let texto = "Olá, meu nome é " + nome + " eu tenho " + idade + " anos." // concatenação
//console.log("Olá, meu nome é " , nome , " eu tenho " , idade , " anos.") 
//console.log(`Olá, meu nome é ${nome} eu tenho ${idade} anos`) //Interpolação

//Atividade 02
//let textoMinusculo = texto.toLowerCase();
//let textoMaiusculo = texto.toUpperCase();
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

//Atividade 03
console.log(typeof idade);

//Atividade 04 - IMC
let peso = 70;
let altura = 1.75;
let imc = (peso / (altura * altura)).toFixed(2);
console.log(`Seu IMC é: ${imc}`);

