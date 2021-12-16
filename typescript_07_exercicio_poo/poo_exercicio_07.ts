//1.
class Calculadora {
    private operando_1: number;
    private operando_2: number;
    constructor(public numero1: number, public numero2: number) {
        this.operando_1 = numero1;
        this.operando_2 = numero2;
    }
    somar(): number {
        return this.numero1 + this.numero2;
    }
    subtrair(): number {
        return this.numero1 - this.numero2;
    }
    multiplicar(): number {
        return this.numero1 * this.numero2;
    }
    dividir(): number {
        return this.numero1 / this.numero2;
    }
}
let calculadora: Calculadora = new Calculadora(10, 5);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());

//2.
class Hora {
    private hora: number;
    private minuto: number;
    private segundo: number;
    constructor(public hour: number, public minute: number, public second: number) {
        this.hora = hour;
        this.minuto = minute;
        this.segundo = second;
    }
    hora_atual(): string {
        return this.hour + ":" + this.minute + ":" + this.second;
    }
}

//3.
class Conta {
    private numero_conta: string;
    private saldo_conta: number;
    constructor(numero_conta: string, saldo_conta: number) {
        this.numero_conta = numero_conta;
        this.saldo_conta = saldo_conta;
    }

    getNumeroConta(): string {
        return this.numero_conta;
    }

    getSaldoConta(): number {
        return this.saldo_conta;
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
                if(this.contas[i].getNumeroConta() == cod_conta){
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

    private consultarIndice(cod_conta: string): number {
        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].getNumeroConta() == cod_conta){
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
            saldo_total += this.contas[i].getSaldoConta();
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

//4.
class Conta {
    private numero_conta: string;
    private saldo_conta: number;
    constructor(numero_conta: string, saldo_conta: number) {
        this.numero_conta = numero_conta;
        this.saldo_conta = saldo_conta;
    }

    getNumeroConta(): string {
        return this.numero_conta;
    }

    setNumeroConta(numero_conta: string): void {
        this.numero_conta = numero_conta;
    }

    getSaldoConta(): number {
        return this.saldo_conta;
    }

    setSaldoConta(saldo_conta: number): void {
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
    private contas: Conta[];
    inserir_conta(conta: Conta): void {
        let cod_conta: string = conta.getNumeroConta();
        if(this.contas.length == 0){
            this.contas.push(conta);
        }else{
            for(let i = 0; i < this.contas.length; i++){
                if(this.contas[i].getNumeroConta() == cod_conta){
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

    private consultarIndice(cod_conta: string): number {
        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].getNumeroConta() == cod_conta){
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
            saldo_total += this.contas[i].getSaldoConta();
        }
        return saldo_total;
    }

    media_saldo(): any {
        let media_saldo = this.saldo_total() / this.qtd_contas();
        return media_saldo;
    }
}
console.log(contas.inserir_conta(new Conta("1", 1323)));
console.log(contas.consultar("1"));
console.log(contas.inserir_conta(new Conta("2", 4237)));
console.log(contas.consultar("2"));
console.log(contas.qtd_contas());
console.log(contas.saldo_total());
console.log(contas.media_saldo());