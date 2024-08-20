class Cartola {
    //atributos
    private cor: string;
    private formato: string;
    private medida: number;

    //construtor
    public constructor(cor: string, formato: string, medida: number) {
        this.cor = cor;
        this.formato = formato;
        this.medida = medida;
    }
    //metodos get e set
    public getCor(): string {
        return this.cor;
    }
    public setCor(cor: string): void {
        this.cor = cor;
    }

    public getFormato(): string {
        return this.formato;
    }
    public setFormato(Formato: string): void {
        this.formato = Formato;
    }

    public getMedida(medida: number): void {
        this.medida = medida
    }

    // metodos

    public tirarCoelho (): void {
        console.log(`tirou 1 coelho da cartola `)
    }

    public protgerSol (): void {

    }
}
