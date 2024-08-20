class Moto {
    //atributos
    private cor: string;
    private aro: number;
    private velocidade: number;
    //construtor
    public constructor(cor: string, aro: number, velocidade: number) {
        this.cor = cor;
        this.aro = aro;
        this.velocidade = velocidade;
    }
    //metodos get e set
    public getCor(): string {
        return this.cor;
    }
    public setCor(cor: string): void {
        this.cor = cor;
    }

    public getAro(): number {
        return this.aro;
    }
    public setAro(aro: number): void {
        this.aro = aro;
    }

    public getVelocidade(velocidade: number): void {
        this.velocidade = velocidade
    }

    public setVelocidade(velocidade: number): void {
        this.velocidade = velocidade
    }

    // metodos
    public acelerar(): number {
        return this.velocidade;
        console.log(`A moto está em ${this.velocidade}km/hr`)
    }

    public frear(): number {
        this.velocidade = 0;
        console.log(`A moto está em ${this.velocidade}km/hr`)
        return this.velocidade;
    }

}