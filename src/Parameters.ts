export default class Parameters {
    private toku: number;
    private tokuMax: number = 200;

    public constructor() {
        this.toku = 0;
    }

    public addToku(added: number) {
        this.toku += added;
        if (this.tokuMax < this.toku) {
            this.toku = this.tokuMax;
        }
    }

    public getToku() {
        return this.toku;
    }
}