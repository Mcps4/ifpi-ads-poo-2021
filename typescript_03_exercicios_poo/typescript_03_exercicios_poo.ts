/* 1. Objetos possuem informações chamados de atributos e ações chamadas de metodos, já as classes são objetos que compartilham dos mesmos atributos só que com carcteristicas diferentes ou seja a classe é um molde com o qual os objetos são modelados um exemplo seria isso:
classe Computador {
    modelo: String 
    marca: String 
    processador: String
    memoria RAM: Number
    armazenamento: Number
} */

/* 2. Atributos nada mais são do que as caracteristicas que o objeto possue e metodos são funções ou procedimentos que realizam as ações do objeto um exemplo seria:
caneta{
    cor: vermelha
    marca: bic
    tipo: esferografica
}*/

/* 3.
Atributo	   Sistema em que é importante	                            Sistema em que não é importante
Peso:	   IMC, sistema medico, sistema de nutrição                     e-comerce, sistema de gerenciamneto de finanças
Tipo de CNH:   sistema do detran, sistema de concessionária	            sistema de controle de estoque
Tipo Sanguíneo: sistemas de hospitais, sistemas de doaçoes de sangue    sistema de escolas musicais
Habilidade destra:	sistema de escolas musicais                         Sistema de controle de trasportes 
Percentual de gordura: sistema de nutrição, sistemas de academias       sistema de aeroporto
Saldo em conta: sistemas bancarios		                                sistemas de escolas
Etinia:	sistemas de escolas                                             sistemas de controle de trasportes
*/

/* 4. a) sim para uma melhor indetificação do titular da conta
b) não. O polimorfismo*/ 

/* 5. professor, materia, aluno, livro, pais */

/* 6. personagem: atributos: nome,vida,força,agilidade,mana, resistencia, metodos: atacar,defender,correr,usar_magia
animal: atributos:nome, vida, velicidade, dano, resistencia, metodos: atacar,correr
monstros: atributos:nome, vida, mana, dano, resistencia,agilidade, metodos: atacar,correr,defender,usar_magia
*/

// 7.
class Retangulo{
    l1: number
    l2: number
    constructor(altura: number, largura: number){
        this.l1 = altura
        this.l2 = largura
    }
    calculaArea(): number{
        return this.l1 * this.l2
    }

    calculaPerimetro(): number{
        return (this.l1 + this.l2) * 2
    }

}

    let retangulo : Retangulo;
    retangulo = new Retangulo(30,50);

    console.log(retangulo.calculaArea());
    console.log(retangulo.calculaPerimetro());

//8.
class Circulo{
    raio: number
    constructor(raio: number){
        this.raio = raio
    }
    calculaArea(): number{
        return Math.PI * Math.pow(this.raio,2)
    }

    calculaPerimetro(): number{
        return 2 * Math.PI * this.raio
    }
}

    let circulo : Circulo;
    circulo = new Circulo(30);

    console.log(circulo.calculaArea());
    console.log(circulo.calculaPerimetro());

//9.

class SituacaoFinanceira{
    valorCreditos: number
    valorDebitos: number
    constructor(creditos: number, debitos: number){
        this.valorCreditos = creditos
        this.valorDebitos = debitos
    }

    saldo(): number{
        return this.valorCreditos - this.valorDebitos
    }

}

    let situacaoFinanceira : SituacaoFinanceira;
    situacaoFinanceira = new SituacaoFinanceira(2000,750);

    console.log(situacaoFinanceira.saldo());