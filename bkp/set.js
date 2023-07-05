/**
 * 
 * 
 * Declarando um conjunto, conjunto não são indexaveis e não aceitam valores iguais
 * 
 * 
 */

let cursos = new Set();

cursos.add("Cálculo I");
cursos.add("Lógica de programação");
cursos.add("Eletrônica I");

// podemos tambem adicionar cursos concatenados

cursos.add("Cálculo II").add("Cálculo III");

console.log(cursos);
cursos.add("Engenharia");
console.log(cursos);

// podemos ver o tamanho (size) do array [vetor] e se contem algum elemento baseado pelo value

console.log("tamanho = " + cursos.size);
console.log(cursos.has('Engenharia Elétrica') ? "Tem curso de engenharia elétrica" : "Não tem curso de engenharia elétrica");

//deletar elementos de um conjunto

cursos.delete("Cálculo III");
console.log(cursos);

// Podemos criar um conjunto (SET) com base em um valor de um vetor (ARRAY) com valores repetidos

let precos = [22.22, 11.11, 11.11, 34.12];
console.log(precos);
console.log(precos.length);
// perceba que ele tira o valor repetido a mais do value 11.11
let precos_unicos = new Set(precos);
console.log(precos_unicos);
console.log(precos_unicos.size);