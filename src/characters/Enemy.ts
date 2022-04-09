import Phaser from "phaser";
import Character from "~/characters/Character";
import ImageManager from "~/loaders/ImageManager";
import {CofigConstants} from "~/consts/CofigConstants";
import {Direction, DirectionManager} from "~/consts/Directions";
import FrameCounter from "~/frame/FrameCounter";

export default class Enemy extends Character {

    private movingDirection: Direction | null = null;

    public constructor(scene: Phaser.Scene) {
        super(200, 200, CofigConstants.cellSize, CofigConstants.cellSize);
        this.image = scene.add.image(200, 200, ImageManager.enemy.getKey()).setDisplaySize(CofigConstants.cellSize, CofigConstants.cellSize);
    }

    public onUpdate(scene: Phaser.Scene) {
        if (this.movingDirection) {
            this.go(this.movingDirection)
        } else {
            this.movingDirection = DirectionManager.random();
        }
        if (FrameCounter.isFrameChanged()) {
            this.movingDirection = null;
        }
    }
}