/*1.a)F
b)V
c)V
d)F
e)F
f)V
g)V
h)V
*/

//2.
class Triangulo {
    lado_1: number;
    lado_2: number;
    lado_3: number;
    constructor(primeiro_lado: number, segundo_lado: number, terceiro_lado: number) {
        this.lado_1 = primeiro_lado;
        this.lado_2 = segundo_lado;
        this.lado_3 = terceiro_lado;
    }
    triangulo_retangulo(): boolean {
        if (this.lado_1 == this.lado_2 && this.lado_2 == this.lado_3) {
            return true;
        } else {
            return false;
        }
    }
    ehIsoceles(): boolean {
        if(this.triangulo_retangulo() == false) {
            return false;
        }else{
            if (this.lado_1 == this.lado_2 || this.lado_2 == this.lado_3 || this.lado_3 == this.lado_1) {
                return true;
            } else {
                return false;
            }
        }
        
    }
    ehEscaleno(): boolean {
        if(this.triangulo_retangulo() == false) {
            return false;
        }else{
            if (this.lado_1 != this.lado_2 && this.lado_2 != this.lado_3 && this.lado_3 != this.lado_1) {
                return true;
            } else {
                return false;
            }
        }
        
    }
    ehEquilatero(): boolean {
        if(this.triangulo_retangulo() == false) {
            return false;
        }else{
            if (this.lado_1 == this.lado_2 && this.lado_2 == this.lado_3) {
                return true;
            } else {
                return false;
            }
        }
    }
}

let triangulo:Triangulo = new Triangulo(12, 8, 8);
console.log(triangulo.triangulo_retangulo());
console.log(triangulo.ehIsoceles());
console.log(triangulo.ehEscaleno());
console.log(triangulo.ehEquilatero());

//3.
class Conta {
    numero_conta: string;
    saldo_conta: number;
    constructor(numero_conta: string, saldo_conta: number) {
        this.numero_conta = numero_conta;
        this.saldo_conta = saldo_conta;
    }

    sacar(valor: number): void {
        this.saldo_conta -= valor;
    }

    depositar(valor: number): void {
        this.saldo_conta += valor;
    }

    transferir(valor: number, conta: Conta): boolean {
        if (this.saldo_conta >= valor) {
            this.sacar(valor);
            conta.depositar(valor);
        } else {
            return false;
        }
    }
}

class Banco {
    contas: Conta[];
    inserir_conta(conta: Conta): void {
        let cod_conta: string = conta.numero_conta
        if(this.contas.length == 0){
            this.contas.push(conta);
        }else{
            for(let i = 0; i < this.contas.length; i++){
                if(this.contas[i].numero_conta == cod_conta){
                    return;
                }else{
                    this.contas.push(conta);
                }
            }
        }
       
    }

    sacar(cod_conta: string, valor: number): void {
        let conta_verifica = this.consultar(cod_conta);
        if(conta_verifica != null){
            conta_verifica.sacar(valor);
        }
    }
    
    transferir(cod_conta_origem: string, cod_conta_destino: string, valor: number): void {
        let conta_origem = this.consultar(cod_conta_origem);
        let conta_destino = this.consultar(cod_conta_destino);
        if(conta_origem != null && conta_destino != null){
            conta_origem.transferir(valor, conta_destino);
        }
    }

    consultar(cod_conta: string): Conta {
        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].numero_conta == cod_conta){
                return this.contas[i];
            }
        }
        return null;
    }

    consultarIndice(cod_conta: string): number {
        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].numero_conta == cod_conta){
                return i;

        }
    }
    alterarConta(conta: Conta): void {
        let indice = this.consultarIndice(conta.numero_conta);

        if(indice != null){
            this.contas[indice] = conta;
        }

    }
    excluir(cod_conta: String): void {
        let indice: number = this.consultarIndice(cod_conta);
        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    depositar(cod_conta: String, valor: number) {
        let conta: Conta = this.consultar(cod_conta);
        if (conta != null) {
            conta.depositar(valor);
        }
    }

    qtd_contas(): any {
        let quantidade_contas = this.contas.length;
        return quantidade_contas;
    }

    saldo_total(): any {
        let saldo_total = 0;
        for (let i = 0; i < this.contas.length; i++) {
            saldo_total += this.contas[i].saldo_conta;
        }
        return saldo_total;
    }

    media_saldo(): any {
        let media_saldo = this.saldo_total() / this.qtd_contas();
        return media_saldo;
    }
}
let contas:Banco = new Banco();
console.log(contas.inserir_conta(new Conta("1", 1323)));
console.log(contas.consultar("1"));
console.log(contas.inserir_conta(new Conta("2", 4237)));
console.log(contas.consultar("2"));
console.log(contas.qtd_contas());
console.log(contas.saldo_total());
console.log(contas.media_saldo());

//4
class Postagem{
    id:number;
    texto:string;
    quantidadeCurtidas:number;
    constructor(id:number, texto:string,quantidadeCurtidas:number){
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }

    curtir():void{
        this.quantidadeCurtidas++;
    }

    toString():string{
        return "Postagem: " + this.id + " " + this.texto + " " + this.quantidadeCurtidas;
    }
}

class MicroBlog{
    postagens:Postagem[];
    constructor(){
        this.postagens = [];
    }

    publicar(postagem:Postagem):void{
        this.postagens.push(postagem);
    }

    excluirPostagem(id:number):void{
        let indice:number = this.consultarIndice(id);
        if(indice != -1){
            for(let i:number = indice; i < this.postagens.length; i++){
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    }

    consultarIndice(id:number):number{
        for(let i:number = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == id){
                return i;
            }
        }
        return -1;
    }

    postagemMaisCurtida():Postagem{
        let mais_curtida:Postagem = this.postagens[0];
        for(let i:number = 0; i < this.postagens.length; i++){
            if(this.postagens[i].quantidadeCurtidas > maior.quantidadeCurtidas){
                mais_curtida = this.postagens[i];
            }
        }
        return mais_curtida;
    }

    curtir(id:number):void{
        let indice:number = this.consultarIndice(id);
        if(indice != -1){
            this.postagens[indice].curtir();
        }
    }

    toString():string{
        let texto:string = "";
        for(let i:number = 0; i < this.postagens.length; i++){
            texto += this.postagens[i].toString() + "\n";
        }
        return texto;
    }

}
let postagem_1:Postagem = new Postagem(1,"Primeira postagem",10);
let postagem_2:Postagem = new Postagem(2,"Segunda postagem",50);
postagem_1.curtir();
console.log(postagem_1.toString());
console.log(postagem_2.toString());
let microblog:MicroBlog = new MicroBlog();
microblog.publicar(postagem_1);
microblog.publicar(postagem_2);
console.log(microblog.postagemMaisCurtida());
console.log(microblog.toString());