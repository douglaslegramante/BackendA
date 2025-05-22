import rl from 'readline-sync';

let num = 0;
do {
    num = rl.questionInt("Informe sua idade: ")
    
} while (num <= 18);