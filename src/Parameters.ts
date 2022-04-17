export default class Parameters {
    private static toku: number = 0;
    private static tokuMax: number = 200;

    public static addToku(added: number) {
        this.toku += added;
        if (this.tokuMax < this.toku) {
            this.toku = this.tokuMax;
        }
    }

    public static subtractToku(subtracted: number) {
        this.toku -= subtracted;
        if (this.toku < 0) {
            this.toku = 0;
        }
    }

    public static getToku() {
        return this.toku;
    }
}