// 1. sim.pois a varivel inteira não possui um constructor ou seja o objeto não pode ser criado ou inicializado a partir da classe hotel ocorrendo um erro.

// 2.
class Hotel {
    quantReservas: number; 
    constructor(public qtdReservas: number) {
        this.quantReservas = qtdReservas;
    }
    adicionarReserva(): void {
        this.quantReservas++;
    }
    
}

let hotel: Hotel = new Hotel(5);
console.log(hotel.quantReservas);

//3. O objeto r do tipo radio nessecita de um argumento em sua instanciação para ser criado como mostra em seu construtor por isso não compila para resolver basta colocar um valor do tipo number como argumento.

/*4. a) 50 e 50 pois c1 e c2 vão apontar para o mesmo local em memoria portanto a referencia de c1 não vai mais existir e c2 vai traferir para algo que não tem referencia logo ele so vai perder 50 reais e não realmente trasferir.
b) Ele vai ser excluido da memoria pelo garbage collector por não possuir referencia.
*/

//5.
class jogador{
    forca:number;
    nivel:number;
    pontos_atuais:number;
    constructor(public stg:number, public lv:number, public pa:number){
        this.forca = stg;
        this.nivel = lv;
        this.pontos_atuais = pa;
    }
    calcular_pr():number{
        return this.forca * this.nivel;
    }

    atacar(jogador:jogador):void{
        jogador.pontos_atuais -= this.calcular_pr();
    }
    
}

let jogador1:jogador = new jogador(5, 2, 100);
let jogador2:jogador = new jogador(8, 4, 100);
jogador1.atacar(jogador2);
jogador2.atacar(jogador1);
console.log(jogador2.pontos_atuais);
console.log(jogador1.pontos_atuais);

//6.
class Conta{
    numero:String;
    saldo:number;
    constructor(public num: String, public saldoInicial: number){
        this.numero = num;
        this.saldo = saldoInicial;
    }

    sacar(valor:number):boolean{
        if(this.saldo >= valor){
            this.saldo -= valor;
        }else{
            return false;
        }

    }

    depositar(valor:number):void{
        this.saldo += valor;
    }

    trasferir(valor:number, conta:Conta):boolean{
        if(this.saldo >= valor){
        this.sacar(valor);
        conta.depositar(valor);
        } else{
            return false;
        }
    }

    consultarSaldo():number{
        return this.saldo;
    }
}

let conta1:Conta = new Conta("1", 750);
let conta2:Conta = new Conta("2", 500);
conta1.trasferir(800, conta2);
console.log(conta1.consultarSaldo());
console.log(conta2.consultarSaldo());

//7.
class Produto{
    codigo:number;
    valor:number;
    descricao:String;
    quantidade:number;
    quantidadeMinima:number;
    constructor(public codigoProduto:number, public valorProduto:number, public descricaoProduto:String, public quantidadeProduto:number, public quantidadeMin:number){
        this.codigo = codigoProduto;
        this.valor = valorProduto;
        this.descricao = descricaoProduto;
        this.quantidade = quantidadeProduto;
        this.quantidadeMinima = quantidadeMin;
    }

    baixar(quantidade:number):number{
        if(this.quantidade > this.quantidadeMinima){
            return this.quantidade -= quantidade;
        }
    }

    repor(quantidade:number):number{
        return this.quantidade += quantidade;
    }

    reajusta(taxa:number):number{
        return this.valor += this.valor * taxa;
    }

    toString():String{
        return `Codigo: ${this.codigo} Valor: ${this.valor} Descrição: ${this.descricao} Quantidade: ${this.quantidade} Quantidade Minima: ${this.quantidadeMinima}`;
    }
    
    equals(produto:Produto):boolean{
        if(this.codigo === produto.codigo){
            return true;
        }
        return false;
        
    }
}

let produto1:Produto = new Produto(1, 2000, "Notebook", 10, 5);
let produto2:Produto = new Produto(2, 50, "Mouse", 8, 5);
produto1.baixar(2);
produto2.repor(2);
produto1.reajusta(0.1);
console.log(produto1.toString());
console.log(produto2.toString());
console.log(produto1.equals(produto2));
