import Phaser from "phaser";
import Wall from "~/things/Wall";
import {CofigConstants} from "~/consts/CofigConstants";
import Prayer from "~/characters/Prayer";

export default class MapLoader {
    private prayer: Prayer;
    private readonly width: number;
    private readonly height: number;

    constructor(scene: Phaser.Scene, data: string[][]) {
        data.forEach((row, rowNum) => {
            row.forEach((val, colNum) => {
                if (val === '1') {
                    new Wall(scene, CofigConstants.cellSize * colNum, CofigConstants.cellSize * rowNum);
                } else if (val === 'p') {
                    this.prayer = new Prayer(scene, CofigConstants.cellSize * colNum, CofigConstants.cellSize * rowNum);
                }
            });
        });
        this.height = data.length;
        this.width = data[0].length;
    }

    public getPrayer(): Prayer {
        return this.prayer;
    }

    public getHeight(): number
    {
        return this.height;
    }

    public getWidth(): number
    {
        return this.width;
    }
}