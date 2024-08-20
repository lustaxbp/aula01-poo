class Planta {
    //atributos
    private material: string;
    private tamanho: number;
    private funcao: string;
    //construtor
    public constructor(material: string, tamanho: number, funcao: string) {
        this.material = material;
        this.tamanho = tamanho;
        this.funcao = funcao;
    }
    //metodos get e set
    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(material: string): void {
        this.material = material;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    public getFuncao(funcao: string): void {
        this.funcao = funcao
    }

    public setFuncao(funcao: string): void {
        this.funcao = funcao
    }

    // metodos
    public destila(): void {

        console.log(`a planta destilou a cana`)
    }

    public armazenar(): void {
        console.log(`a planta está armazenando etanol`)
    }

}