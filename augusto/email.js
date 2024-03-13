function primeiraLetra(nome) {
    return nome[0]
}

function montarSiglaEmail(palavras) {
    let sigla = ""
    for (let i = 0; i < palavras.length; i++)
        sigla += primeiraLetra(palavras[i])
    return sigla + "@aluno.ifal.edu.br"
}
function email(nome) {
    // o email é formado pela primeira letra de cada nome 
    palavras = nome.toLowerCase().split(" ") // nome completo em palavras
    console.log(palavras)
    let sigla = montarSiglaEmail(palavras)
    console.log(sigla)
    //e se já existir a mesma sigla contar e acrescentar o número da contagem
}
siglas = []
/** lista de nome de alunos e deve a lista de e-mails*/
email("John Due")