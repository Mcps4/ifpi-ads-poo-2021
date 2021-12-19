//1.
class Veiculo {
    placa: string;
    ano: number;
}

class Carro extends Veiculo {
    modelo: string;
}

class CarroEletrico extends Carro {
    autonomiaBateria: number;
}

//2.
class Calculadora {
    private operando_1: number;
    private operando_2: number;
    constructor(public numero1: number, public numero2: number) {
        this.operando_1 = numero1;
        this.operando_2 = numero2;
    }
    get getOperando1(): number {
        return this.operando_1;
    }
    set setOperando1(valor: number): void {
        this.operando_1 = valor;
    }
    get getOperando_2(): number {
        return this.operando_2;
    }
    set setOperando_2(valor: number): void {
        this.operando_2 = valor;
    }
    adicionar(): number {
        return this.numero1 + this.numero2;
    }
}
let calculadora: Calculadora = new Calculadora(23, 35);
console.log(calculadora.adicionar());

class CalculadoraCientifica extends Calculadora {
    constructor(public numero1: number, public numero2: number) {
        super(numero1, numero2);
    }
    exponenciar(): number {
        return Math.pow(this.numero1, this.numero2);
    }
}
let calculadoraCientifica: CalculadoraCientifica = new CalculadoraCientifica(2, 8);
console.log(calculadoraCientifica.exponenciar());

//c) Sim foi necessario implementar o metodo get e set para acessar os atributos privados da classe Calculadora.

//4. 
class Conta {
    private numero_conta: string;
    private saldo_conta: number;
    constructor(numero_conta: string, saldo_conta: number) {
        this.numero_conta = numero_conta;
        this.saldo_conta = saldo_conta;
    }

    get getNumeroConta(): string {
        return this.numero_conta;
    }

    set setNumeroConta(valor: string) {
        this.numero_conta = valor;
    }

    get getSaldoConta(): number {
        return this.saldo_conta;
    }

    set setSaldoConta(valor: number) {
        this.saldo_conta = valor;
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
    private contas: Conta[];
    inserir_conta(conta: Conta): void {
        let cod_conta: string = conta.getNumeroConta();
        if(this.contas.length == 0){
            this.contas.push(conta);
        }else{
            for(let i = 0; i < this.contas.length; i++){
                if(this.contas[i].getNumeroConta == cod_conta){
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
            if(this.contas[i].getNumeroConta == cod_conta){
                return this.contas[i];
            }
        }
        return null;
    }

    private consultarIndice(cod_conta: string): number {
        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].getNumeroConta == cod_conta){
                return i;

        }
    }
    alterarConta(conta: Conta): void {
        let indice = this.consultarIndice(conta.getNumeroConta());

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
            saldo_total += this.contas[i].getSaldoConta;
        }
        return saldo_total;
    }
    media_saldo(): any {
        let media_saldo = this.saldo_total() / this.qtd_contas();
        return media_saldo;
    }
    renderJuros():any{
        for(let conta of this.contas){
            if(conta instanceof Poupanca){
                conta.renderJuros();
            }
        }

        }
    }
}
let conta = new Banco();
console.log(conta.inserir_conta(new Conta("1", 1323)));
console.log(conta.consultar("1"));
console.log(conta.inserir_conta(new Poupanca("2", 4237, 5)));
console.log(conta.consultar("2"));
console.log(conta.qtd_contas());
console.log(conta.saldo_total());
console.log(conta.media_saldo());
conta.renderJuros();
console.log(conta.consultar("2"));

class Poupanca extends Conta {
    constructor(numero_conta: string, saldo_conta: number, private juros: number) {
        super(numero_conta, saldo_conta);
        this.juros == juros;
    }
    renderJuros() {
        this.depositar(this.getSaldoConta * this.juros / 100);
    }
    get getJuros(): number {
        return this.juros;
    }
    set setJuros(valor: number) {
        this.juros = valor;
    }
}

//5.
class Produto{
    private id: number;
    private descricao: String;
    private quantidade: number;
    private valor: number;
    constructor(id: number, descricao: String, quantidade: number, valor: number){
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get getId(): number {
        return this.id;
    }
    set setId(valor: number) {
        this.id = valor;
    }
    get getDescricao(): String {
        return this.descricao;
    }
    set setDescricao(valor: String) {
        this.descricao = valor;
    }
    get getQuantidade(): number {
        return this.quantidade;
    }
    set setQuantidade(valor: number) {
        this.quantidade = valor;
    }
    get getValor(): number {
        return this.valor;
    }
    set setValor(valor: number) {
        this.valor = valor;
    }
    repor(quantidade: number): any{
        this.quantidade += quantidade;
    }
    darBaixa(quantidade: number): any{
        this.quantidade -= quantidade;
    }

}

class ProdutoPerecivel extends Produto {
    constructor(id: number, descricao: String, quantidade: number, valor: number, private data_validade: Date) {
        super(id, descricao, quantidade, valor);
        this.data_validade = data_validade;
    }
    get getDataValidade(): Date {
        return this.data_validade;
    }
    set setDataValidade(valor: Date) {
        this.data_validade = valor;
    }
    verificarDataValidade(): any {
        let data_atual = new Date();
        if (this.data_validade < data_atual) {
            return true;
        }else{
            return false;
        }
    }

}

class Estoque {
    private produto: Produto[] = [];
    inserir_produto(produto: Produto): any {
        this.produto.push(produto);
    }
    consultar_produto(id: number): any {
        for (let i = 0; i < this.produto.length; i++) {
            if (this.produto[i].getId == id) {
                return this.produto[i];
            }
        }
        return null;
    }
    excluir_produto(id: number): any {
        for (let i = 0; i < this.produto.length; i++) {
            if (this.produto[i].getId == id) {
                for (let j = i; j < this.produto.length; j++) {
                    this.produto[j] = this.produto[j + 1];
                }
                this.produto.pop();
            }
        }
    }
    repor_produto(id: number, quantidade: number): any {
        let produto: Produto = this.consultar_produto(id);
        if (produto != null) {
            produto.repor(quantidade);
        }
    }
    dar_baixa_produto(id: number, quantidade: number): any {
        let produto: Produto = this.consultar_produto(id);
        if (produto != null) {
            produto.darBaixa(quantidade);
        }
    }
    produto_vencido(produto: Produto): any {
        if (produto instanceof ProdutoPerecivel) {
            if (produto.verificarDataValidade()) {
                return true;
            }
        }
        return false;
    }
}
let estoque = new Estoque();
let produto = new Produto(1, "computador", 10, 2500);
let produto_perecivel = new ProdutoPerecivel(2, "banana", 5, 2, new Date(2020, 10, 10));
estoque.inserir_produto(produto);
estoque.inserir_produto(produto_perecivel);
console.log(estoque.consultar_produto(1));
console.log(estoque.consultar_produto(2));
estoque.repor_produto(1, 5);
console.log(estoque.consultar_produto(1));
estoque.dar_baixa_produto(1, 3);
console.log(estoque.consultar_produto(1));
console.log(estoque.produto_vencido(produto_perecivel));
console.log(estoque.produto_vencido(produto));


