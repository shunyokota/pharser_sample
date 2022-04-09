import GameObject from "~/gameObjects/GameObject";
import Phaser from "phaser";
import {CofigConstants} from "~/consts/CofigConstants";
import ImageManager from "~/loaders/ImageManager";

export default class Wall extends GameObject {
    public constructor(scene: Phaser.Scene) {
        super(600, 200, CofigConstants.cellSize, CofigConstants.cellSize);
        this.image = scene.add.image(600, 200, ImageManager.enemy.getKey()).setDisplaySize(CofigConstants.cellSize, CofigConstants.cellSize);
    }
}