


const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10); // valor entre 0 e 1, multiplicado por 10 (0-9)
    setInterval(() => {
    
        if (valor % 2 == 0) {
            resolve(`O valor ${valor} é par`);
        } else {
            reject(`O valor ${valor} é impar`);
        }

    }, 2000);
});

async function executarPromise() {
    try {
        const response = await novaPromise();
        console.log(response);
    } catch(erro) {
        console.log(erro);
    }
}
for (let i = 0; i < 5; i++) {
    executarPromise();
}
