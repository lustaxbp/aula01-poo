class casaco {
    //atributos
    private cor: string;
    private tecido: string;
    private medida: number;

    //construtor
    public constructor(cor: string, tecido: string, medida: number) {
        this.cor = cor;
        this.tecido = tecido;
        this.medida = medida;
    }
    //metodos get e set
    public getCor(): string {
        return this.cor;
    }
    public setCor(cor: string): void {
        this.cor = cor;
    }

    public getTecido(): string {
        return this.tecido;
    }
    public setTecido(Tecido: string): void {
        this.tecido = Tecido;
    }

    public getMedida(medida: number): void {
        this.medida = medida
    }

    // metodos

    public vestir (): void {
        console.log(`Está aquecido`)
    }

    public tirar (): void {
     console.log(`Está frio`)
    }
}
