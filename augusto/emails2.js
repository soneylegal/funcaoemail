function primeiraLetra(nome) {
    return nome[0];
}

function montarSiglaEmail(palavras, siglas) {
    let sigla = "";
    for (let i = 0; i < palavras.length; i++) {
        sigla += primeiraLetra(palavras[i]);
    }

    let contador = 0;
    for (let i = 0; i < siglas.length; i++) {
        if (siglas[i].includes(sigla)) {
            contador++;
        }
    }

    if (contador > 0) {
        sigla += contador;
    }

    siglas.push(sigla);

    return sigla + "@aluno.ifal.edu.br";
}

function email(nome, siglas) {
    const palavras = nome.toLowerCase().split(" ");
    const sigla = montarSiglaEmail(palavras, siglas);
    return sigla;
}

let siglas = [];
console.log(email("joao melao cabeça de mamao", siglas)); 