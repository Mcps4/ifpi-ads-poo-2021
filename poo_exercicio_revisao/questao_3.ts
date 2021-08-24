function menor_valor(num: number, num2: number, num3: number){
    if (num < num2 && num < num3) {
        console.log(num);
    }
    else if (num2 < num3) {
        console.log(num2);
    }
    else {
        console.log (num3);
    }
}

menor_valor(10, 13, 15);