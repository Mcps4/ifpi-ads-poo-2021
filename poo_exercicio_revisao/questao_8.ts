function pares_vetor_20() {
    let vetor = [15, 16, 17, 18, 19, 20, 2, 30, 5, 22, 1, 7, 34, 23, 45, 14, 37,38,39,28]
    let contador = 0;
    for (let i = 0; i <= 20; i++) {
        if (vetor[i] % 2 == 0) {
            contador++;
        }
    }
    console.log(contador)
}

pares_vetor_20();