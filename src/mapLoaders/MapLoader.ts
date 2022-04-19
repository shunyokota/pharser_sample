import Phaser from "phaser";
import Wall from "~/things/Wall";
import {CofigConstants} from "~/consts/CofigConstants";
import Prayer from "~/characters/Prayer";

export default class MapLoader {
    private prayer: Prayer;
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
    }

    public getPrayer(): Prayer {
        return this.prayer;
    }
}