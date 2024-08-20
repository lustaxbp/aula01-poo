class computador {
    //atributos
    private processador: string;
    private armazenamento: number;
    private sistema: string;

    //construtor
    public constructor(processador: string, armazenamento: number, sistema: string) {
        this.processador = processador;
        this.armazenamento = armazenamento;
        this.sistema = sistema;
    }
    //metodos get e set
    public getProcessador(): string {
        return this.processador;
    }
    public setProcessador(Processador: string): void {
        this.processador = Processador;
    }

    public getArmazenamento(): number {
        return this.armazenamento;
    }
    public setArmazenamento(Armazenamento: number): void {
        this.armazenamento = Armazenamento;
    }

    public getSistema(): string {
        return this.sistema;
    }
    public setSistema(Sistema: string): void {
        this.sistema = Sistema;
    }
   

    // metodos

    public estudar (): void {
        console.log(`você está estudando`)
    }

    public pesquisar (): void {
     console.log(`o computador fez uma pesquisa`)
    }
}