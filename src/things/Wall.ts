import GameObject from "~/gameObjects/GameObject";
import Phaser from "phaser";
import {CofigConstants} from "~/consts/CofigConstants";
import ImageManager from "~/loaders/ImageManager";

export default class Wall extends GameObject {
    public constructor(scene: Phaser.Scene, x: number, y :number) {
        super(x, y, CofigConstants.cellSize, CofigConstants.cellSize);
        this.image = scene.add.image(x, y, ImageManager.enemy.getKey()).setDisplaySize(CofigConstants.cellSize, CofigConstants.cellSize);
    }
}