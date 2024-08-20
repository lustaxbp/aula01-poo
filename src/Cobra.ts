class cobra {
    //atributos
    private cor: string;
    private tamanho: string;
    private especie: string;

    //construtor
    public constructor(cor: string, tamanho: string, especie: string) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.especie = especie;
    }
    //metodos get e set
    public getCor(): string {
        return this.cor;
    }
    public setCor(cor: string): void {
        this.cor = cor;
    }

    public getTecido(): string {
        return this.tamanho;
    }
    public setTecido(Tamanho: string): void {
        this.tamanho = Tamanho;
    }

    public getEspecie(especie: string): void {
        this.especie = especie
    }

    public setEspecie(especie: string): void {
        this.especie = especie;
    // metodos
    }
    
    public rastejar ():void{
        console.log(`a cobra está rastejandto`)
    }

    public picar (): void {
     console.log(`Vc levou uma picada`)
    }
}