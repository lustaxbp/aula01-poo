class banco {
    //atributos
    private formato: string;
    private tamanho: number;
    private material: string;

    //construtor
    public constructor(formato: string, tamanho: number, material: string) {
        this.formato = formato;
        this.tamanho = tamanho;
        this.material = material;
    }
    //metodos get e set
    public getFormarto(): string {
        return this.formato;
    }
    public setFormato(formato: string): void {
        this.formato = formato;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(Tamanho: number): void {
        this.tamanho = Tamanho;
    }

    public getMaterial(material: string): void {
        this.material = material
    }

    public setMaterial(material: string): void {
        this.material = material;
    // metodos
    }
    
    public sentar ():void{
        console.log(`que delicia sentar e descançar`)
    }

    public subir(): void {
     console.log(`você subiu para trocar a lâmpada`)
    }
}