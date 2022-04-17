import Phaser from "phaser";
import Character from "~/characters/Character";
import ImageManager from "~/loaders/ImageManager";
import {CofigConstants} from "~/consts/CofigConstants";
import {Direction, DirectionManager} from "~/consts/Directions";
import FrameCounter from "~/frame/FrameCounter";
import {MyGame} from "~/index";

export default class Enemy extends Character {

    private movingDirection: Direction | null = null;

    public constructor(scene: Phaser.Scene) {
        super(200, 200, CofigConstants.cellSize, CofigConstants.cellSize);
        this.image = scene.add.image(200, 200, ImageManager.enemy.getKey()).setDisplaySize(CofigConstants.cellSize, CofigConstants.cellSize);
        this.speed = 2;
    }

    public onUpdate(scene: MyGame) {
        if (this.movingDirection) {
            this.go(this.movingDirection)
        } else {
            const xDir: Direction = this.x < scene.prayer.getX() ? 'right' : 'left';
            const yDir: Direction = this.y < scene.prayer.getY() ? 'down' : 'up';
            const rand = Math.random();
            if (rand <= 0.25) {
                this.movingDirection = xDir;
            } else if (rand <= 0.5) {
                this.movingDirection = yDir
            } else {
                this.movingDirection = DirectionManager.random();
            }
        }
        if (FrameCounter.isFrameChanged()) {
            this.movingDirection = null;
        }
    }
}