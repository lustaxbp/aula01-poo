class bebedouro {
    //atributos
    private formato: string;
    private tamanho: number;
    private material: string;

    //construtor
    public constructor(formato: string, tamanho: number, especie: string) {
        this.formato = formato;
        this.tamanho = tamanho;
        this.material = especie;
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
    
    public beberAgua ():void{
        console.log(`você evitou uma pedra e problemas renais`)
    }

    public encherGarrafa(): void {
     console.log(`sua garrafa está cheia`)
    }
}