function soma_media(num:number){
    let numero:number = num
    let soma:number = 0
    let media:number = 0
    
    for(let i = num; i > -1; i--){
        soma += num
        num--
    }
    media = soma / numero
    console.log(soma,'',media)
}
soma_media(10);