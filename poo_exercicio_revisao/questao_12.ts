function horario(horario:number){
    let segundos = 0;
    let minutos = 0;
    let horas = 0;

    horas = Math.floor(horario / 3600);
    minutos = Math.floor((horario % 3600) / 60);
    segundos = Math.floor((horario % 3600) % 60);

    console.log(`${horas}:${minutos}:${segundos}`);
    
}

horario(3870);
