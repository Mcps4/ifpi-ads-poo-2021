function aparicao_d(){
    let d = 8;
    let n = 8385;
    let contador = 0;

    let milhar = Math.trunc(n / 1000) % 10;
    let centenas = Math.trunc(n / 100) % 10;
    let dezenas = Math.trunc(n / 10) % 10;
    let unidades = Math.trunc(n / 1 ) % 10;

    if( d <= 9 && d > 0){
        if(milhar == d){
        contador++;
        }
        if(centenas == d){
        contador++;
        }
        if(dezenas == d){
        contador++;
        }
        if(unidades == d){
        contador++;
        }

        console.log(contador);
    } else{
        console.log("Valor de d é inválido");
    }
}

aparicao_d();