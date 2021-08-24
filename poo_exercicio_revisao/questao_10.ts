import * as readline from 'readline';

function ler_remover_vogais(){
    let ler_texto = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    ler_texto.question('Digite o texto: ', (answer) => {
        console.log(answer.replace(/(a|e|i|o|u)/gi, ""));
        ler_texto.close();
    });
}
ler_remover_vogais();
