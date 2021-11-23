//1.
let array = [10, 14, 18, 20, 30, 34, 40]
let soma = 0;
    for (let i = 0; i < array.length; i++) {
            soma += array[i];
    }
        
    console.log(soma);

/*2. O array vai ser percorrido e a cada numero fazer um console.log porem ele vai partir do indice 0 até
o indice do tamanho do array logo vai ser printado algo que não está presente no array retornando um undefined no ultimo print 
*/

//3.
let vetor = [6, 15, 30, 18, 28, 25, 25, 12, 35, 32]

vetor.sort(function(a, b){return a-b});

console.log(vetor);

vetor.sort(function(a, b){return b-a});

console.log(vetor);

//4.
class mod_texto {
    constructor(texto) {
        this.texto = texto;
    }
    
    texto : string = "Instituto Federal do Piauí"

    textoMaiusculo() {
        return this.texto.toUpperCase();
    }

    texto_pos_10() {
        return this.texto.charAt(10);
    }

    texto_pos_o() {
        return this.texto.lastIndexOf("o");
    }

    dividir_texto_esp() {
        return this.texto.split("").join(" ");
    }
}
let modify_texto = new mod_texto("Instituto Federal do Piauí");
console.log(modify_texto.textoMaiusculo());
console.log(modify_texto.texto_pos_10());
console.log(modify_texto.texto_pos_o());
console.log(modify_texto.dividir_texto_esp());