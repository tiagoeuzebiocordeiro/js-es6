let nome = "Maria Eduarda";

for (let letra  of nome) {
    console.log(letra);
}

let numbers = [1, 2, 3, 4, 5];

console.log("-----------------------------------");

for (let x of numbers) {
    x += 1;
    console.log(x);
}


for (let index in numbers) {
    console.log(`Index: ${index}, value: ${numbers[index]}`);
}

// chave e valor

for (let chave of numbers.keys()) {
    console.log(chave);
}

console.log("================================================================");

for (let valor of numbers.values()) {
    console.log(valor);
}

console.log("================================================================");

for (let [chave, valor] of numbers.entries()) {
    console.log(`${chave} - ${valor}`);
}

console.log("================================================================");

// com conjunto (tirando valor repetido)

let conjunto = new Set([1, 2, 2, 3, 4, 5]);

for (let x of conjunto) {
    console.log(x);
}