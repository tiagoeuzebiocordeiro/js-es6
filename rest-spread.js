/*

    Rest / Spread = Juntar e espalhar valores => "...";

    Prática:
*/

function total(...precos) {
    let total = 0;
    precos.forEach(p => total += p);
    return total;
}

console.log(total(25.35, 23.12, 23).toFixed(2)); 

console.log(total(23.56, 92.12));

let frutas1 = ['Manga', 'Uva', 'Maçã'];
let frutas2 = ['Morango', 'Abacaxi', 'Banana'];

let compras = [...frutas1, ...frutas2];
console.log("");
console.log("compras: " + compras);

let alunos = ['Marcos', 'Pedro', 'João'];
let novoAluno = 'Maria Eduarda';


// 1ra maneira
//alunos.push(novoAluno);

// 2da maneira
alunos = [...alunos, novoAluno];
console.log(alunos);
